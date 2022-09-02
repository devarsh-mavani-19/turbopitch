import { Alert, Modal, Snackbar } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../config/firebase';
import { authAction } from '../store/auth';
import { loadingAction } from '../store/loading';
import { notificationAction } from '../store/notification';
import { resolveTokenAndCredits, signOutCompletely } from '../utils/auth';
import { getUserCredits } from '../utils/firestore';
import Blury from './common/Blury';
export default function AppCover({app}) {
  let notification = useSelector(state => state.notification)
  let loading = useSelector(state => state.loading)
  let dispatch = useDispatch()
    const handleNotificationClose = () => {
        dispatch(notificationAction.hideNotification())
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in
                dispatch(notificationAction.showNotification({
                    message: `You are logged in as ${user.displayName} successfully`,
                    type: 'success'
                }))
                resolveTokenAndCredits(user)
                .then(({user, token, credits}) => {
                    dispatch(authAction.login({email: user.email, fullname: user.displayName, token: token, credits: credits}))
                    dispatch(loadingAction.stopLoading())
                })
                .catch(e => {
                    signOutCompletely()
                    dispatch(authAction.stopLoading())
                    dispatch(loadingAction.stopLoading())
                })
            } else {
                // User is not logged in
                dispatch(authAction.stopLoading())
                dispatch(loadingAction.stopLoading())
            }
        }, error => {
        })
    }, [])

    return (
        <>
        <Snackbar open={notification.show} autoHideDuration={2000} onClose={handleNotificationClose} style={{fontSize: '1.5rem', fontWeight: 'bolder'}}>
            <Alert  severity={`${notification.type}`} sx={{ width: '100%' }} onClose={handleNotificationClose} variant={'filled'} style={{fontSize: '1.5rem', fontWeight: 'bolder'}}>
                {
                    notification.message
                }
            </Alert>
        </Snackbar>
        {
            loading.isLoading ? (
                <Modal open={true} style={{
                    border: 'none',
                    outline: 'none'
                }}>
                    <div className='container' style={{outline: 'none'}}>
                        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
                            <div class="spinner-border text-primary" style={{width: '5rem', height: '5rem'}} role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                            <Blury />
                        </div>
                    </div>
                </Modal>
            ) : null
        }
        {app}
        </>
        );
}
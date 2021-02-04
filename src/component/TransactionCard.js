import React from 'react';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import Button from 'react-bootstrap/Button';
import ErrorIcon from '@material-ui/icons/Error';

const TransactionCard = () => {
    return (
        <div className='transCard'>
            <div className='transactionDetail'>
                <div className='transactionHeading'>
                    <h5>Cancel/recall payment,GBP 1,000.00</h5>
                    <h6>1234567890123456 (GB), KUIML Business Company</h6>
                </div>
                <div className='transRefDet'>
                    <div className='transRefDetHeaders'>
                        <p>Request reference</p>
                        <p className='transRefDetHeadersVal'>SET29383ABCH</p>
                    </div>
                    <div className='vertDivider'></div>
                    <div className='transRefDetHeaders'>
                        <p>Category</p>
                        <p className='transRefDetHeadersVal'>Payment</p>
                    </div>
                    <div className='vertDivider'></div>
                    <div className='transRefDetHeaders'>
                        <p>Request status</p>
                        <div className='headerWithIcon'>
                            <ErrorIcon/>
                            <p className='transRefDetHeadersVal'>Pending authorisation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tranCardRightDiv'>
                <div className='transButtons'>
                    <PictureAsPdfIcon m={2} />
                    <div className='vertDivider'></div>
                    <ChromeReaderModeIcon m={2} />
                    <Button className='transBtns rejectBtn'>Reject</Button>
                    <Button className='transBtns authorizeBtn'>Authorize</Button>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard

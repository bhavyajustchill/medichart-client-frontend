import React from 'react'

export default function ImagePopup(props) {
    const { imgUrl } = props;
    return (
        <>
            <>
                <div className='p-12'>
                    <div className="box ">
                        <a  className="btn btn-accent background-link" style={{backgroundImage:`url("${imgUrl}")`, backgroundSize:'cover', width:90, height:90}} href="#popup1">
                            
                        </a>
                    </div>
                    <div id="popup1" className="overlay">
                        <div className="popup">
                           
                            <a className="close" href="#">
                                ×
                            </a>
                            <div className="content">
                                <img className='w-full' src={imgUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

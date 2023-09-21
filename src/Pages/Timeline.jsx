import React from 'react';
import '../Styles/Timeline.css';
import star2 from '../Assets/star2.png';

const Timeline = () => {
    return (
        <div className="timeline-container">
            <div className="timeline-wrapper">
                <div className="timeline-title">
                    <h2>Timeline</h2>
                    <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </div>

                <div className="timeline-content">
                    <div className="content-left">
                        <img src={star2} alt="" />
                        <div className="hackathon-announcement">
                            <h2>Hackathon Announcement</h2>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>

                        <div className="hackathon-announcement-date">
                            <h2>November 18, 2023</h2>
                        </div>

                        <div className="reg-end">
                            <h2>Teams Registration ends</h2>
                            <p>Interested Participants are no longer Allowed to register</p>
                        </div>

                        <div className="reg-end-date">
                            <h2>November 18, 2023</h2>
                        </div>

                        <div className="hackathon-begin">
                            <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
                            <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                        </div>

                        <div className="hackathon-date">
                            <h2>November 18, 2023</h2>
                        </div>
                    </div>

                    <div className="content-line">
                        <div className="straight-line"></div>
                        <div class="circle">
                            <span>1</span>
                        </div>
                        <div className="line"></div>
                        <div class="circle">
                            <span>2</span>
                        </div>
                        <div className="line"></div>
                        <div class="circle">
                            <span>3</span>
                        </div>
                        <div className="line"></div>
                        <div class="circle">
                            <span>4</span>
                        </div>
                        <div className="line"></div>
                        <div class="circle">
                            <span>5</span>
                        </div>
                        <div className="line"></div>
                        <div class="circle">
                            <span>6</span>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="reg-begin-date">
                            <h2>November 18, 2023</h2>
                        </div>
                        
                        <div className="reg-begins">
                            <h2>Teams Registration begins</h2>
                            <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>

                        <div className="announcement-date">
                            <h2>November 18, 2023</h2>
                        </div>

                        <div className="announcement">
                            <h2>Announcement of the accepted teams and ideas</h2>
                            <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                        </div>

                        <div className="demo-date">
                            <h2>November 18, 2023</h2>
                        </div>

                        <div className="demo">
                            <h2>Demo Day</h2>
                            <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
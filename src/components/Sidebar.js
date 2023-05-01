import { IonIcon } from '@ionic/react';
import { chatboxOutline, logOutOutline, logoApple, peopleOutline, settingsOutline, speedometerOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';

function Sidebar(props) {

    useEffect(() => {
        let list = document.querySelectorAll('.navigation li');
        function activeLink() {
            list.forEach((item) =>
                item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
        list.forEach((item) => item.addEventListener('click', activeLink));
    }, []);

    return (
        <div className="navigation">
            <ul>

                <li>
                    <a href="#brand-name">
                        <span className="icon">
                            <IonIcon icon={logoApple} title="Brand Name" />
                        </span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>

                <li>
                    <a href="#dashboard" >
                        <span className="icon">
                            <IonIcon icon={speedometerOutline} title="Dashboard" />
                        </span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#products">
                        <span className="icon">
                            <IonIcon icon={peopleOutline} title="Customers" />
                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li>
                    <a href="#orders">
                        <span className="icon">
                            <IonIcon icon={chatboxOutline} title="Messages" />
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li>
                    <a href="#settings">
                        <span className="icon">
                            <IonIcon icon={settingsOutline} title="Settings" />
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li>
                    <a href="#sign-out">
                        <span className="icon">
                            <IonIcon icon={logOutOutline} title="Sign Out" />
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;
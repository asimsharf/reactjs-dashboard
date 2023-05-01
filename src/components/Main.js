import { IonIcon } from "@ionic/react";
import { eyeOutline, menuOutline, peopleOutline, searchOutline } from "ionicons/icons";
import React, { useEffect } from "react";


function Main(props) {

    useEffect(() => {
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        toggle.onclick = function () {
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        }
    }, []);

    return (
        <div className="main">
            <div className="topbar">

                {/* toggle button  */}
                <div className="toggle">
                    <IonIcon icon={menuOutline} />
                </div>

                {/* search  */}
                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <IonIcon icon={searchOutline} />
                    </label>
                </div>

                {/* userImage */}
                <div className="user has-transition">
                    <img src="./assets/images/user.png" alt="user" />
                </div>

            </div>

            {/* main content  */}
            <div className="cardBox">

                {/* Daily Views */}
                <div className="card">
                    <div>
                        <div className="numbers">1500</div>
                        <div className="cardName">Daily Views</div>
                    </div>
                    <div className="iconBox">
                        <IonIcon icon={eyeOutline} />
                    </div>
                </div>

                {/* Daily Visitors */}
                <div className="card">
                    <div>
                        <div className="numbers">1500</div>
                        <div className="cardName">Daily Visitors</div>
                    </div>
                    <div className="iconBox">
                        <IonIcon icon={peopleOutline} />
                    </div>
                </div>

                {/* Daily Visitors */}
                <div className="card">
                    <div>
                        <div className="numbers">1500</div>
                        <div className="cardName">Daily Visitors</div>
                    </div>
                    <div className="iconBox">
                        <IonIcon icon={eyeOutline} />
                    </div>
                </div>

                {/* Daily Visitors */}
                <div className="card">
                    <div>
                        <div className="numbers">1500</div>
                        <div className="cardName">Daily Visitors</div>
                    </div>
                    <div className="iconBox">
                        <IonIcon icon={eyeOutline} />
                    </div>
                </div>

            </div>

            {/* charts  */}
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status delivered">Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status refunded">Refunded</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status delivered">Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status refunded">Refunded</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status returned">Returned</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status cancelled">Cancelled</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status delivered">Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status refunded">Refunded</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status cancelled">Cancelled</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status returned">Returned</span>
                                </td>
                            </tr>
                            <tr>
                                <td>iPhone 12</td>
                                <td>$999</td>
                                <td>1</td>
                                <td>
                                    <span className="status inprocess">In Process</span>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx">
                                    <img src="./assets/images/user.png" alt="user" />
                                </div>
                            </td>
                            <td>
                                <h4>John Doe<br /> <span>Italy</span> </h4>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Main;
import React from "react";

function Notofications() {
  return (
    <div className="App">
      <section className="notificationsList">
        <h2>Notifications</h2>
        <div className="notification new">
          <div>
            <b>Emiliano Prohaska I</b> says hi!
          </div>
          <div title="2021-02-06T22:10:38.413Z">
            <i>6 minutes ago</i>
          </div>
        </div>
        <div className="notification new">
          <div>
            <b>Willard Senger</b> sent you a gift
          </div>
          <div title="2021-02-06T22:08:55.877Z">
            <i>8 minutes ago</i>
          </div>
        </div>
        <div className="notification new">
          <div>
            <b>Candace Braun</b> sent you a gift
          </div>
          <div title="2021-02-06T22:08:52.480Z">
            <i>8 minutes ago</i>
          </div>
        </div>
        <div className="notification">
          <div>
            <b>Willard Senger</b> is glad we're friends
          </div>
          <div title="2021-02-06T22:04:08.190Z">
            <i>13 minutes ago</i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notofications;

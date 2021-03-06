import React from "react";

const AccountInfo = () => (
    <div id="account-info">
        <div className="card-body pb-2">
            <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea className="form-control" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
            </div>
            <div className="form-group">
                <label className="form-label">Birthday</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control" value="May 3, 1995"/>
            </div>
            <div className="form-group">
                <label className="form-label">Country</label>
                <select className="custom-select">
                    <option>USA</option>
                    <option selected="">Canada</option>
                    <option>UK</option>
                    <option>Germany</option>
                    <option>France</option>
                </select>
            </div>
        </div>
        <hr className="border-light m-0"/>
        <div className="card-body pb-2">
            <h6 className="mb-4">Contacts</h6>
            <div className="form-group">
                <label className="form-label">Phone</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control" value="+0 (123) 456 7891"/>
            </div>
            <div className="form-group">
                <label className="form-label">Website</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control" value=""/>
            </div>
        </div>
    </div>
)

export default AccountInfo;
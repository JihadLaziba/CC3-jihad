import React from "react";
import "./DetailsUser.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.user);
  const selectedUser = data.users.filter((user) => user.id == id);
  return (
    <div>
      {selectedUser.map((user) => (
        <div className="details" key={user.id}>
          <div className="img">
            <img src={user.image} />
          </div>
          <div>
            <div className="detail">
              <label>Full Name:{`${user.firstName} ${user.lastName}`}</label>
            </div>
            <div className="detail">
              <label>Age:{user.age} </label>
            </div>
            <div className="detail">
              <label>Gender: {user.gender} </label>
            </div>
            <div className="detail">
              <label>Email: {user.email}</label>
            </div>
            <div className="detail">
              <label>Phone number:{user.phone} </label>
            </div>
            <div className="detail">
              <label>Weight:{user.weight} </label>
            </div>
            <div className="detail">
              <label>Height:{user.height} </label>
            </div>
            <div className="detail">
              <label>Birth Date:{user.birthDate}</label>
            </div>
            <div className="detail">
              <label>BloodGroup:{user.bloodGroup}</label>
            </div>
            <div className="detail">
              <label>Eye Color:{user.eyeColor} </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

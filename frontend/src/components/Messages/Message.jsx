import React from "react";

function Message() {
  return (
    <div className="flex items-start space-x-2 mb-2">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          alt="tailwind css chat bubble"
          src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
        />
      </div>
      <div className="flex flex-col bg-blue-500 text-white p-3 rounded">
        <p>Hi! What is up?</p>
        <div className="text-xs opacity-50">12:42</div>
      </div>
    </div>
  );
}

export default Message;

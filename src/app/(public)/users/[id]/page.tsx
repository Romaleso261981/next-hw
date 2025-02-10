"use client";

import { useParams } from "next/navigation";

const UserPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>
        User ID: {id}
      </h1>
    </div>
  );
};

export default UserPage;

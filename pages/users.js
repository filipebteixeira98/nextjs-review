import React from "react";
import axios from "axios";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

const User = ({ users }) => (
  <div>
    <Head>
      <title>Users</title>
    </Head>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.login}
          <Link href={`/users/${user.login}`}>
            <a>View user's profile</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/">
      <a>Go back</a>
    </Link>
  </div>
);

User.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};

export default withAnalytics()(User);

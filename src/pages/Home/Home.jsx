import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { getUser } from "../../store/features/user";
import { MoonLoader } from "react-spinners";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Classes from "./Home.module.scss";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();
  // const userInfo = [];

  useEffect(() => {
    async function getUserDoc() {
      const _query = query(
        collection(db, "users"),
        where("uid", "==", user.uid)
      );
      let userDoc = await getDocs(_query);
      userDoc = userDoc.forEach((snap) => {
        const doc = snap.data();
        setUserInfo(doc);
      });
    }

    if (user) {
      getUserDoc();
      dispatch(getUser(userInfo));
    }
  }, [user]);

  useEffect(() => {
    if (userInfo) {
      dispatch(getUser(userInfo));
    }
  }, [userInfo]);

  if (loading || (user && !userInfo))
    return <MoonLoader size={90} color="#ffffff" />;

  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Header}>
        <Header />
      </div>
      <div className={Classes.Body}>
        <SideBar />
        <div className={Classes.Content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

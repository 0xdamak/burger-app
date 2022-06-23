import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../../../components/UI/Button";
import { ng } from "../../../../data/ng";
import { toast } from "react-toastify";
import { formatString } from "../../../../utils/formatString";
import * as yup from "yup";
import Input from "../../../../components/UI/Input/index";
import ClipLoader from "react-spinners/ClipLoader";
import Classes from "./Form.module.scss";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();

  const signUpSchema = yup.object().shape({
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    phoneNo: yup
      .number()
      .positive()
      .integer()
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Invalid email address format")
      .required("Email is required"),
    address: yup.string().required("Address name is required!"),
    state: yup.string().required("State name is required!"),
    selectedCity: yup.string().required("City name is required!"),
    password: yup.string().min(8).required(),
  });

  async function signUpWithEmailAndPassword(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const newDoc = await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        firstName,
        lastName,
        phoneNo,
        address,
        state,
        city: selectedCity,
        email,
      });
      setLoading(false);
      console.log(res);
      console.log(user);
      console.log(newDoc);
      toast.success(`Account created successfully`);
    } catch (error) {
      setLoading(false);
      console.log(error.code);
      toast.error(formatString(error.code));
    }
  }

  function selectStateHandler(e) {
    e.preventDefault();
    setState(e.target.value);
  }

  useEffect(() => {
    ng.map((stateInfo) => {
      if (stateInfo.alias === state) return setCities(stateInfo.lgas);
      return null;
    });
  }, [state, cities]);

  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user, navigate]);

  return (
    <form className={Classes.Wrapper} onSubmit={signUpWithEmailAndPassword}>
      <div className={Classes.Inputs}>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="(+234)Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          name="state"
          id="state"
          value={state}
          onChange={selectStateHandler}
          required
        >
          <option value="" disabled>
            Region
          </option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="ogun">Ogun</option>
          <option value="rivers">Rivers</option>
        </select>

        <select
          name="city"
          id="city"
          value={selectedCity}
          disabled={state === "" && true}
          onChange={(e) => setSelectedCity(e.target.value)}
          required
        >
          <option value="" disabled>
            City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <Input
          type="text"
          placeholder="Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={Classes.Button}>
        <ButtonPrimary>
          {/* <ClipLoader color="#000000" size={15} /> */}
          {loading ? <ClipLoader color="#00000" size={15} /> : "Sign Up"}
        </ButtonPrimary>
      </div>
    </form>
  );
}

import { useState } from "react";
import useAxiosPublic from "./Hooks/useAxiosPublic";

const AgeCalculator = () => {
  const [birthDateInput, setBirthDateInput] = useState("");
  const [calculatedAge, setCalculatedAge] = useState(null);
  const axiosPublic = useAxiosPublic();
  // Calculate today's date for max attribute
  const today = new Date();
  const formattedTodayDate = today.toISOString().split("T")[0]; // YYYY-MM-DD format

  // function to calculate age
  const calculateAge = () => {
    const birthDate = new Date(birthDateInput);
    const currentDate = new Date();
    const yearDifference = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    let years = yearDifference;
    let months = monthDifference;
    let days = dayDifference;

    if (dayDifference < 0) {
      const previousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        birthDate.getDate()
      );
      months -= 1;
      days = Math.floor((currentDate - previousMonth) / (24 * 60 * 60 * 1000));
    }

    if (monthDifference < 0) {
      years -= 1;
      months += 12;
    }

    setCalculatedAge({
      years,
      months,
      days,
    });
  };

  const handleSubmitAge = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    if (!calculatedAge) {
      alert("Please calculate your age first!");
      return;
    }

    // Destructure calculatedAge to get individual values
    const { years, months, days } = calculatedAge;

    const userData = { name, years, months, days };
    console.log("User Data:", userData);

    try {
      const res = await axiosPublic.post("/postUserAge", userData);

      if (res.data.insertedId) {
        alert("Wow");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 text-white min-h-screen">
        <div className="hero-content flex-col   w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-white font-bold font-serif">
              Age Calculator!
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmitAge}>
              <div className="form-control card-body ">
                <label className="label">
                  <span className="label-tex text-lg">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control card-body ">
                <label className="label">
                  <span className="label-tex text-lg">
                    Please select your date of birth
                  </span>
                </label>
                <input
                  name="age"
                  value={birthDateInput}
                  onChange={(e) => {
                    if (e.target.value.length <= 10) {
                      setBirthDateInput(e.target.value);
                    }
                  }}
                  type="date"
                  min="0000-01-01"
                  max={formattedTodayDate} // Disable future dates
                  className="input input-bordered "
                  required
                />
                <div className="flex flex-col space-y-8 py-5">
                  <button
                    onClick={calculateAge}
                    type="submit"
                    disabled={!birthDateInput}
                    className="btn btn-primary"
                  >
                    Calculate Age
                  </button>
                </div>
              </div>
            </form>
          </div>
          {calculatedAge && (
            <div>
              <p className="text-white text-lg md:text-xl">
                You are {calculatedAge.years} years, {calculatedAge.months}{" "}
                months, and {calculatedAge.days} days old
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;

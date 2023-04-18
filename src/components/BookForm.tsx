import React from "react";
import "./BookForm.scss";

const BookingForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const datetime = new Date(`${date} ${time}`).toLocaleString("fr-BE");
    const response = await fetch("https://formspree.io/f/xoqzpbyd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        datetime,
        _replyto: email,
        _subject: "New booking request",
        _cc: "ngodfroid@gmail.com",
      }),
    });
    if (response.ok) {
      alert("Booking request submitted!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setDate("");
      setTime("");
    } else {
      alert("Error submitting booking request!");
    }
  };

  return (
    <div className="booking-form">
      <h2>Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            lang="fr-CA"
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            lang="fr-CA"
          />
        </label>
        <p>
          La date et heure séléctionnées:{" "}
          {date && time
            ? new Date(`${date} ${time}`).toLocaleString("fr-BE")
            : "-"}
        </p>
        <input
          style={{ backgroundColor: "white", border: "none" }}
          className="submit"
          type="submit"
          value="Envoyer"
        />
      </form>
    </div>
  );
};

export default BookingForm;

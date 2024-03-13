const PrayerBanner = () => {
  return (
    <div className="prayer-banner">
      <div className="prayer-header d-flex justify-content-between">
        <span>13th March 2024</span>
        <h3>Full Timetable</h3>
      </div>
      <table className="prayer-table">
        <thead>
          <tr>
            <th>Fajer</th>
            <th>Sunrise</th>
            <th>Dhuhr</th>
            <th>Asr</th>
            <th>Maghrib</th>
            <th>Isha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4:20 AM</td>
            <td>6:25 AM</td>
            <td>12:22 PM</td>
            <td className="active">16:12 PM</td>
            <td>18:20 PM</td>
            <td>20:20 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrayerBanner;

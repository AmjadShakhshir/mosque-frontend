import { useTranslation } from "react-i18next";

const PrayerBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="prayer-banner">
      <div className="prayer-header d-flex justify-content-between">
        <span>13th March 2024</span>
        <h3>Full Timetable</h3>
      </div>
      <table className="table prayer-table">
        <thead>
          <tr>
            <th>{t("Fajr")}</th>
            <th>{t("Sunrise")}</th>
            <th>{t("Dhuhr")}</th>
            <th>{t("Asr")}</th>
            <th>{t("Maghrib")}</th>
            <th>{t("Isha")}</th>
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

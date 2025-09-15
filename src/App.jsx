import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="behind-glass"></div>

      <div className="header-of-table">
        <div className="title-container">Stock List</div>
        <div className="new-payment-button">
            <button
               className="add-new-claim-button"
            >
             + New Car Company
            </button>
        </div>
      </div>

      <table className="claim-request-table">
        <tr>
          <th>Rank</th>
          <th>Comapny Name</th>
          <th>Market Cap</th>
          <th>Country</th>
          <th>Price</th>
          <th>Top Model</th>
          <th>Employees</th>
          <th>Year</th>
          <th>Founder</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>TESLA</td>
          <td>$1.277 T</td>
          <td>USA</td>
          <td>$395.94</td>
          <td>MDOEL S PLAID</td>
          <td>125,665</td>
          <td>2003</td>
          <td>Elon Musk</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>TOYOTA</td>
          <td>$255.62 B</td>
          <td>JAPAN</td>
          <td>$196.13</td>
          <td>LAND CRUISER 300</td>
          <td>383,853</td>
          <td>1973</td>
          <td>Kiichiro Toyoda</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>XIAOMI</td>
          <td>$182.06 B</td>
          <td>CHINA</td>
          <td>$7.07</td>
          <td>XIAOMI SU7 ULTRA</td>
          <td>46,426</td>
          <td>2010</td>
          <td>Lei Jun</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>BYD</td>
          <td>$130.17 B</td>
          <td>CHINA</td>
          <td>$14.87</td>
          <td>YANGWANG U8</td>
          <td>968,900</td>
          <td>1995</td>
          <td>Wang Chuanfu</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>FERRARI</td>
          <td>$85.12 B</td>
          <td>ITALY</td>
          <td>$478.00</td>
          <td>SF90 STRADALE</td>
          <td>5,435</td>
          <td>1939</td>
          <td>Enzo Ferrari</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>VOLKSWAGEN</td>
          <td>$60.16 B</td>
          <td>GERMANY</td>
          <td>$119.72</td>
          <td>VOLKSWAGEN GOLF R</td>
          <td>684,025</td>
          <td>1937</td>
          <td>German Labour Front</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>BMW</td>
          <td>$59.95 B</td>
          <td>GERMANY</td>
          <td>$98.38</td>
          <td>BMW X7</td>
          <td>159,104</td>
          <td>1916</td>
          <td>Karl Rapp</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>MERCEDES-BENZ</td>
          <td>$58.41 B</td>
          <td>GERMANY</td>
          <td>$60.67</td>
          <td>MERCEDES-BENZ S-CLASS</td>
          <td>159,104</td>
          <td>1926</td>
          <td>Karl Benz</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>MARUTI SUZUKI INDIA</td>
          <td>$54.60 B</td>
          <td>INDIA</td>
          <td>$173.67</td>
          <td>INVICTO</td>
          <td>47,433</td>
          <td>1981</td>
          <td>Osamu Suzuki</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>MAHINDRA & MAHINDRA</td>
          <td>$49.51 B</td>
          <td>INDIA</td>
          <td>$40.68</td>
          <td>MAHINDRA XUV700</td>
          <td>324,000</td>
          <td>1945</td>
          <td>Jagdish Chandra Mahindra</td>
          <td>
            <button className="details-button"> Details </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;

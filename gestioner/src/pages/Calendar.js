import React, { useEffect } from "react";

import "./styles/calendar.css";
import CALENDAR from "../utils/calendar1";

function Calendar() {
  useEffect(() => {
    var cal = CALENDAR();
    cal.init();
  });

  return (
    <>
      <main className="mainCalendar">
        <div id="cal">
          <div className="headere">
            <span className="left button" id="prev">
              {" "}
              &lang;{" "}
            </span>
            <span className="left hook"></span>
            <span className="month-year" id="label">
              {" "}
              junio 2020{" "}
            </span>
            <span className="right hook"></span>
            <span className="right button" id="next">
              {" "}
              &rang;{" "}
            </span>
          </div>
          <table id="days">
            <td>lun</td>
            <td>Mar</td>
            <td>Mie</td>
            <td>Jue</td>
            <td>Vie</td>
            <td>Sab</td>
            <td>Dom</td>
          </table>
          <div id="cal-frame">
            <table className="curr">
              <tr>
                <td className="nil"></td>
                <td className="nil"></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td class="today">11</td>
                <td>12</td>
              </tr>
              <tr>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
              </tr>
              <tr>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
              </tr>
              <tr>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td className="nil"></td>
                <td className="nil"></td>
                <td className="nil"></td>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Calendar;

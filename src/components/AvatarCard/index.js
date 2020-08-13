import React from "react";
import { useMedia } from "../../store/hooks/meida";
// Карта с автаром
import ruStrings from "react-timeago/lib/language-strings/ru";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import TimeAgo from "react-timeago/lib";
const AvatarCard = ({ item }) => {
  const minWidth680 = useMedia("(min-width:680px)");
  return (
    <div className="d-flex w-100 mb-15 align-items-start">
      <div
        className={`${
          minWidth680 ? `mr-10` : `mr-5`
        } top-10 position-sticky  rounded`}
        style={{
          background: `url(${item.field0}) no-repeat 50% 50% / cover`,
          minWidth: `${minWidth680 ? `80px` : `60px`}`,
          height: `${minWidth680 ? `80px` : `60px`}`,
        }}
      />
      <div
        className={`w-100 rounded bg-white ${
          minWidth680 ? `p-15` : `p-5`
        } d-flex flex-column text-break overflow-hidden`}
      >
        <div
          className={`d-flex justify-content-between border-bottom `}
          style={{
            fontSize: `${minWidth680 ? `20px` : `14px`}`,
          }}
        >
          <div>{item.field1}</div>
          <div className="text-muted">{item.field2}</div>
        </div>
        <div
          className="p-5"
          style={{
            fontSize: `${minWidth680 ? `16px` : `14px`}`,
          }}
        >
          {item.field3}
        </div>
        {(item.field4 || item.field5) && (
          <div
            className="d-flex justify-content-between mt-5"
            style={{
              fontSize: `${minWidth680 ? `16px` : `14px`}`,
            }}
          >
            <div className="text-muted align-self-end">{item.field4}</div>
            <div className="text-muted align-self-end">{item.field5}</div>
          </div>
        )}

        <div
          className="d-flex justify-content-between mt-5"
          style={{
            fontSize: `${minWidth680 ? `16px` : `14px`}`,
          }}
        >
          <div className="text-muted align-self-end">{item.field6}</div>
          <div className="text-muted align-self-end">
            <TimeAgo
              date={new Date(item.field7 * 1000)}
              formatter={buildFormatter(ruStrings)}
            />
          </div>
        </div>
        {item.field8 && (
          <div
            className="d-flex justify-content-end mt-5"
            style={{
              fontSize: `${minWidth680 ? `16px` : `14px`}`,
            }}
          >
            <div className="btn" onClick={() => item.field8}>
              Взять заказ
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarCard;

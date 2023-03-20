import { Range, getTrackBackground } from "react-range";

const RangeComponent = ({ratingValues, setRatingValues, minV=1, maxV=10, setValues
}) => {
  const STEP = 1;
  const MIN = minV;
  const MAX = maxV;
  let values = ratingValues;
  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={e => {
        setValues(e);
        setRatingValues(e);
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            gridArea: 'range',
            height: "36px",
            display: "flex",
            width: 'auto',
            margin: "0 6px 0 6px"
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#ccc", "lightcoral", "#ccc"],
                min: MIN,
                max: MAX
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "12px",
            width: "12px",
            borderRadius: "50%",
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA"
          }}
        >
        </div>
      )}
    />
  );
};

export default RangeComponent;

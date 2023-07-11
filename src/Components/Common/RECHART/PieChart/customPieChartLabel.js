import React from "react";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props) => {
    console.log("rendered");
    const {
        cx,
        cy,
        midAngle,
        outerRadius,
        fill,
        payload,
        percent,
        value,
        centerText,
        showSecondLabel
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 30;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
        <g>
            {showSecondLabel === "true" ? <>
                <text x={cx} y={cy} dy={-2} textAnchor="middle" fill='#363636' >
                    {centerText.title}
                </text>
                <text x={cx} y={cy} dy={22} textAnchor="middle" fill='#ff0000' style={{ fontSize: '14', fontWeight: '500', fontFamily: "var(textFamily)" }} >
                    {centerText.value}
                </text>
            </> :

                <>
                    <text x={cx} y={cy} dy={10} textAnchor="middle" fill='#363636' >
                        {centerText.title}
                    </text>
                    {/* <text x={cx} y={cy} dy={25} textAnchor="middle" fill='#ff0000' className="text2">
                        {centerText.value}
                    </text> */}
                </>
            }


            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                style={{ fontWeight: "bold" }}
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill={fill}
            >
                {payload.name}
            </text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {value}
            </text>
        </g>
    );
};

const CustomPieChartLabel = React.memo(renderCustomizedLabel);

export default CustomPieChartLabel;
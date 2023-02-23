import { graphic } from 'echarts/src/export'

export const chartOptions = {
    legend: {
        show: true,
        bottom: 0,
        left: 0,
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 5,
        textStyle: {
            color: '#fff',
            fontSize: 10,
        }
    },
    xAxisConfig: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#FFFFFF',
                fontSize: 10,
            },
        },
    },
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: 'rgba(30,30,30,.85)', // 设置背景颜色
        textStyle: {
            fontSize: '40%',
        },
        axisPointer: {
            lineStyle: {
                color: "rgba(28, 124, 196)",
            },
        },
    },
    yAxisConfig: {
        nameTextStyle: {
            color: "#fff",
            fontSize: 10,
        },
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
        },
    },
}


export const getAreaStyle = (color) => {
    return {
        opacity: 0.9,
        color: new graphic.LinearGradient(0, 0, 0, 1,
            [
                {
                    offset: 0,
                    color: `${color + '30'}`,
                },
                {
                    offset: 0.6,
                    color: `${color + '20'}`,
                },
                {
                    offset: 1,
                    color: `${color + '10'}`,
                },
            ],
            false
        ),
    }
}


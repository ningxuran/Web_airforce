var dataTest;

// 基于准备好的dom，初始化echarts实例
var batteryChart = echarts.init(document.getElementById('battery'));
var channelsChart = echarts.init(document.getElementById('channels'));
var velocityChart = echarts.init(document.getElementById('velocity'));

var app = {};
var now = new Date();
var time = now.getSeconds();
var date = [time];

var batteryTmp = [];
var channelsTmp = [];
var velocityTmp = [];
var data = [];

var voltage = [0];
var current = [0];
var level = [0];

var channelOne = [];
var channelTwo = [];
var channelThr = [];
var channelFou = [];
var channelFiv = [];
var channelSix = [];
var channelSev = [];
var channelEig = [];

var attitudeTmp = [0,0,0];

var decision = [];

// battery option
bOption = {
    title: {
        text: 'Battery',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Voltage','Current','Level']
    },
    toolbox: {
        show: true,
        feature: {
            // dataZoom: {},
            // dataView: {readOnly: false},
            // magicType: {type: ['line', 'bar']},
            // restore: {},
            // saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name:'Voltage',
            type:'line',
            data: voltage,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Current',
            type:'line',
            data: current,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Level',
            type:'line',
            data: level,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};

// channels
cOption = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Channel 1','Channel 2','Channel 3','Channel 4','Channel 5','Channel 6','Channel 7','Channel 8']
    },
    toolbox: {
        show: true,
        feature: {
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        min: 1400
    },
    series: [
        {
            name:'Channel 1',
            type:'line',
            data: channelOne,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 2',
            type:'line',
            data: channelTwo,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 3',
            type:'line',
            data: channelThr,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 4',
            type:'line',
            data: channelFou,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 5',
            type:'line',
            data: channelFiv,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 6',
            type:'line',
            data: channelSix,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 7',
            type:'line',
            data: channelSev,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Channel 8',
            type:'line',
            data: channelEig,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};

vOption = {
	title: {
        text: 'Velocity',
    },
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
    },
    series : [
        {
            name: 'Y',
            type: 'gauge',
            z: 3,
            min: -5,
            max: 5,
            splitNumber: 10,
            radius: '65%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 5
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 15,
                    fontStyle: 'italic'
                }
            },
            detail : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                }
            },
            pointer: {
                width:6
            },
            data:[{value: 0, name: 'm/s'}]
        },
        {
            name: 'X',
            type: 'gauge',
            center: ['23%', '55%'],    // 默认全局居中
            radius: '55%',
            min:-5,
            max:5,
            endAngle:45,
            splitNumber:5,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length:12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length:20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:4
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                }
            },
            data:[{value: 0, name: 'm/s'}]
        },
        {
            name: 'Z',
            type: 'gauge',
            center: ['75%', '55%'],    // 默认全局居中
            radius: '55%',
            min:-5,
            max:5,
            startAngle: 135,
    		endAngle: -45,
            splitNumber:5,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length:12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length:20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:4
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                }
            },
            data:[{value: 0, name: 'm/s'}]
        }
    ]
};

// Create a client instance
client = new Paho.MQTT.Client("101.201.55.168", 9001, "myClientId");

// client = new Paho.MQTT.Client("test.mosquitto.org", 8080, "clientId");

// var client = new Paho.MQTT.Client("ws://iot.eclipse.org/ws", "myClientId" + new Date().getTime());
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


var container, stats;
var camera, scene, renderer;
var mesh, zmesh, geometry;
var app = {};
var textureLoader = new THREE.TextureLoader();
var cubeTextureLoader = new THREE.CubeTextureLoader();
init();


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("FlightLog", 1);
  client.subscribe("Navigation", 1);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
    console.log(message.payloadString);
    console.log(typeof message.payloadString)
    dataTest = eval('(' + message.payloadString + ')');
    // dataTest = JSON.stringify(dataTest);
    // console.log(dataTest.Battery);
    console.log(message.destinationName);

    if (message.destinationName == "FlightLog") {
        // battery
        if(typeof dataTest.Battery == 'string'){
            batteryTmp = dataTest.Battery.split(",")
        }
        console.log(typeof dataTest.Battery);
        batteryTmp = dataTest.Battery.split(",")
        voltage.push(batteryTmp[0]);
        current.push(batteryTmp[1]);
        level.push(batteryTmp[2]);

        // time
        now = new Date();
        now.setTime(dataTest.TimeStamp * 1000);
        dateTmp = now.toLocaleTimeString();
        date.push(dateTmp);

        // channels
        channelsTmp = dataTest.ServoOutput.split(",");
        channelOne.push(channelsTmp[0]);
        channelTwo.push(channelsTmp[1]);
        channelThr.push(channelsTmp[2]);
        channelFou.push(channelsTmp[3]);
        channelFiv.push(channelsTmp[4]);
        channelSix.push(channelsTmp[5]);
        channelSev.push(channelsTmp[6]);
        channelEig.push(channelsTmp[7]);
        // channelFiv.push(1500);

        // velocity
        velocityTmp = dataTest.Velocity.split(",");
        EKF = dataTest.EKF;
        Mode = dataTest.Mode;
        Status = dataTest.SystemStatus;

        // attitude
        attitudeTmp = dataTest.Attitude.split(",");

        x = document.getElementById("EKF");  //查找元素
        x.innerHTML="EKF : " + EKF + " ";

        y = document.getElementById("Mode");  //查找元素
        y.innerHTML="Mode : " + Mode + " ";

        z = document.getElementById("Status");  //查找元素
        z.innerHTML="System Status : " + Status + " ";

        len = date.length
        if (len > 20) {
            voltage.shift();
            current.shift();
            level.shift();

            date.shift();

            channelOne.shift();
            channelTwo.shift();
            channelThr.shift();
            channelFou.shift();
            channelFiv.shift();
            channelSix.shift();
            channelSev.shift();
            channelEig.shift();

        };

        batteryChart.setOption({
            xAxis:  {
                data: date
            },
            series: [{
                name: 'Voltage',
                data: voltage
            },
            {
                name: "Current",
                data: current
            },
            {
                name: 'Level',
                data: level
            }]
        });



        channelsChart.setOption({
            xAxis:  {
                data: date
            },
            series: [{
                name: 'Channel 1',
                data: channelOne
            },
            {
                name: "Channel 2",
                data: channelTwo
            },
            {
                name: 'Channel 3',
                data: channelThr
            },
            {
                name: 'Channel 4',
                data: channelFou
            },
            {
                name: 'Channel 5',
                data: channelFiv
            },
            {
                name: 'Channel 6',
                data: channelSix
            },
            {
                name: 'Channel 7',
                data: channelSev
            },
            {
                name: 'Channel 8',
                data: channelEig
            }]
        });

        vOption.series[0].data[0].value = Number(velocityTmp[0]);
        vOption.series[1].data[0].value = Number(velocityTmp[1]);
        vOption.series[2].data[0].value = Number(velocityTmp[2]);
        velocityChart.setOption(vOption,true);

        animate();

    }
    else if (message.destinationName == "Navigation"){
        decision = dataTest.Navigation;
        // decision = "a";

        // time
        now = new Date();
        now.setTime(dataTest.TimeStamp * 1000);
        dateTmp = now.toLocaleTimeString();

        de = document.getElementById("decision");  //查找元素
        de.innerHTML += "<p>" + dateTmp + " : " + decision + "</p>";
        de.scrollTop = de.scrollHeight;
    }


}
            

if (cOption && typeof cOption === "object") {
channelsChart.setOption(cOption, true);
}

if (bOption && typeof bOption === "object") {
batteryChart.setOption(bOption, true);
}

if (vOption && typeof vOption === "object") {
velocityChart.setOption(vOption, true);
} 


function init() {
    container = document.getElementById('attitude');
    document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera( 20, 600 / 300, 1, 2000 );
    camera.position.z = 190;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0xffffff, 800, 2000 );
    var path = "textures/cube/SwedishRoyalCastle/";
    var format = '.jpg';
    var urls = [
    	path + 'px' + format, path + 'nx' + format,
    	path + 'py' + format, path + 'ny' + format,
    	path + 'pz' + format, path + 'nz' + format
    ];
    reflectionCube = cubeTextureLoader.load( urls );
    // LIGHTS
    var ambient = new THREE.AmbientLight( 0x040404 );
    scene.add( ambient );
    var light = new THREE.SpotLight( 0xffeedd, 1.2, 650, Math.PI / 6 );
    light.position.set( 0, -100, 500 );
    light.castShadow = true;
    light.shadow.mapWidth = 1024;
    light.shadow.mapHeight = 1024;
    // scene.add( new THREE.CameraHelper( light.shadow.camera ) );
    scene.add( light );
    // RENDERER
    renderer = new THREE.WebGLRenderer( { 
    	antialias: true,
    	alpha: true
     } );
    renderer.setClearColor( scene.fog.color );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 440, 220 );
    renderer.domElement.style.position = "relative";
    container.appendChild( renderer.domElement );
    //
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    // STATS
    // stats = new Stats();
    // container.appendChild( stats.dom );
    // EVENTS
    // window.addEventListener( 'resize', onWindowResize, false );
    // LOADER
    var c = 0, s = Date.now();

    var loader = new THREE.CTMLoader();
    loader.load( "models/ctm/581.ctm",   function( geometry ) {
    	var material = new THREE.MeshLambertMaterial( { color: 0xffaa00, map: textureLoader.load( "textures/UV_Grid_Sm.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
    	mesh = new THREE.Mesh( geometry, material );
    	mesh.position.set( 0, 0, 0 );
    	mesh.scale.set( 4, 4, 4 );
    	mesh.rotation.x = 3.3;
    	mesh.rotation.z = 3.1;
    	mesh.rotation.y = 0;
    	mesh.castShadow = true;
    	mesh.receiveShadow = true;
    	scene.add( mesh );
    }, { useWorker: true } );
}

function animate() {

    requestAnimationFrame( animate );
    // console.log(typeof mesh);
    if (typeof mesh == "object")
    {
    	// mesh.rotation.x += 0.1;
    	mesh.rotation.x = 3.3 + Number(attitudeTmp[0]);
        mesh.rotation.y = Number(attitudeTmp[1]);
        mesh.rotation.z = 3.1 + Number(attitudeTmp[2]);
    }
    renderer.render( scene, camera );

}


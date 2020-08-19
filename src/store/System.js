const MENU_DATA = [{
  "key": 1,
  "text": "平台信息",
  "path": "/system_setting/user",
  "childMenu": [{
    "key": 1,
    "text": '用户信息',
    "path": "/system_setting/user",
  }, {
    "key": 2,
    "text": '供电所信息',
    "path": "/system_setting/elect_list",
  }]
}, {
  "key": 2,
  "text": "台区台账",
  "path": "/system_setting/typhone",
  "childMenu": [{
    "key": 3,
    "text": '台区信息',
    "path": "/system_setting/typhone"
  }, {
    "key": 4,
    "text": '基础设备',
    "path": "/system_setting/basic_devices"
  }, {
    "key": 5,
    "text": '设备点位',
    "path": "/system_setting/devices_point"
  }, {
    "key": 6,
    "text": '监测设备',
    "path": "/system_setting/monitor_devices"
  }, {
    "key": 7,
    "text": '预设方案',
    "path": "/system_setting/program_forward"
  }, {
    "key": 8,
    "text": '方案绑定',
    "path": "/system_setting/program_bind"
  }, {
    "key": 9,
    "text": '能效配置',
    "path": "/system_setting/source_config"
  }]
}];
// 台区监测
const MONITORING = [{
      "key": 1,
      "text": "线损信息",
      "path": "/area_monitoring/line_loss_total",
      "childMenu": [{
        "key": 10,
        "text": '线损统计',
        "path": "/area_monitoring/line_loss_total"
      }, {
        "key": 11,
        "text": '线损异常',
        "path": "/area_monitoring/loss_exception"
      }]
    }, {
      "key": 3,
      "text": "告警信息",
      "path": "/area_monitoring/eletric_alarm",
      "childMenu": [{
        "key": 12,
        "text": '用电告警',
        "path": "/area_monitoring/eletric_alarm"
      }, {
        "key": 13,
        "text": '遥测告警',
        "path": "/area_monitoring/telemetry_alarm"
      }, {
        "key": 14,
        "text": '告警维护',
        "path": "/area_monitoring/alarm_maintenance"
      }, {
        "key": 15,
        "text": '三相不平衡',
        "path": "/area_monitoring/unbalanced_info"
      }]
    }, {
      "key": 4,
      "text": "用能信息",
      "path": "/area_monitoring/freezing_data",
      "childMenu": [{
          "key": 16,
          "text": '冻结数据',
          "path": "/area_monitoring/freezing_data"
        }, {
          "key": 17,
          "text": '用电分析',
          "path": "/area_monitoring/electric_analysis"
        }, {
          "key": 18,
          "text": '电能质量',
          "path": "/area_monitoring/power_quality"
        }, {
          "key": 19,
          "text": '负荷曲线',
          "path": "/area_monitoring/load_curve"
        }]
      }, {
        "key": 2,
        "text": "遥信故障",
        "path": "/area_monitoring/remote_failure"
      }];
    export {
      MENU_DATA,
      MONITORING
    };

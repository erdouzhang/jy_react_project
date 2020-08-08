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
  "path": "/system_setting/test1",
  "childMenu": [{
    "key": 3,
    "text": '台区信息',
    "path": "/system_setting/table/d3"
  }, {
    "key": 4,
    "text": '基础设备',
    "path": "/system_setting/table/devices"
  }, {
    "key": 5,
    "text": '设备点位',
    "path": "/system_setting/table/point"
  }, {
    "key": 6,
    "text": '监测设备',
    "path": "/system_setting/table/montoring"
  }, {
    "key": 7,
    "text": '预设方案',
    "path": "/system_setting/table/program_forward"
  }, {
    "key": 8,
    "text": '方案绑定',
    "path": "/system_setting/table/program_bind"
  }, {
    "key": 9,
    "text": '能效配置',
    "path": "/system_setting/table/config_source"
  }]
}];
// 台区监测
const MONITORING = [{
      "key": 1,
      "text": "线损信息",
      "path": "/area_monitoring/table",
      "childMenu": [{
        "key": 10,
        "text": '线损统计',
        "path": "/system_setting/table/d10"
      }, {
        "key": 11,
        "text": '线损异常',
        "path": "/system_setting/table/d11"
      }]
    }, {
      "key": 3,
      "text": "告警信息",
      "path": "/area_monitoring/fault2",
      "childMenu": [{
        "key": 12,
        "text": '用电告警',
        "path": "/system_setting/table/d10"
      }, {
        "key": 13,
        "text": '遥测告警',
        "path": "/system_setting/table/d11"
      }, {
        "key": 14,
        "text": '告警维护',
        "path": "/system_setting/table/d11"
      }, {
        "key": 15,
        "text": '三相不平衡',
        "path": "/system_setting/table/d11"
      }]
    }, {
      "key": 4,
      "text": "用能信息",
      "path": "/area_monitoring/fault3",
      "childMenu": [{
          "key": 16,
          "text": '冻结数据',
          "path": "/system_setting/table/d16"
        }, {
          "key": 17,
          "text": '用电分析',
          "path": "/system_setting/table/d17"
        }, {
          "key": 18,
          "text": '电能质量',
          "path": "/system_setting/table/d18"
        }, {
          "key": 19,
          "text": '负荷曲线',
          "path": "/system_setting/table/d19"
        }]
      }, {
        "key": 2,
        "text": "遥信故障",
        "path": "/area_monitoring/fault1"
      }];
    export {
      MENU_DATA,
      MONITORING
    };

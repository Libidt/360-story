var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view-360",
      "name": "Street View 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5580015936917029,
        "pitch": 0.5018530296024863,
        "fov": 1.5802290220394455
      },
      "linkHotspots": [
        {
          "yaw": -0.10250884145066763,
          "pitch": 0.06687212617140759,
          "rotation": 5.497787143782138,
          "target": "0-street-view-360"
        },
        {
          "yaw": 0.5580015936917029,
          "pitch": 0.5018530296024863,
          "rotation": 0,
          "target": "1-street-view-train-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6014427002949336,
          "pitch": 0.1192833238849893,
          "title": "Secretariat Statue",
          "text": "Built in 2023, this statue shows a long history of something unusual about Ashland and Viriginia. After many years of looking for a site, someone decided to have it near the Ashland Train Station, near the \"iorn horse\"."
        }
      ]
    },
    {
      "id": "1-street-view-train-station",
      "name": "Street View train station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.10886477521145821,
          "pitch": 0.003018045802235747,
          "title": "Train station",
          "text": "Great station!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

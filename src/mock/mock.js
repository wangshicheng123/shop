import Mock from "mockjs"
import url from "../../service.config.js"

let Random = Mock.Random;
Mock.mock(url.recommandList,{
    'list|10-15': [{
        'imgsrc': Random.image('250x250'),
        'name': Random.ctitle(),
        'price|2000-10000': 0
    }]
})
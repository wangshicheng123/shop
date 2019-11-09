const MOCKURL= "http://nongji.com/";
const SERVERURL= "http://localhost:3333/shop/";

export default{
    recommandList: MOCKURL+ 'recommandList',
    login: SERVERURL+ "user/login",
    regist: SERVERURL+ "user/regist",
    getTypeList: SERVERURL+ "type/getTypeList",
    getProduct: SERVERURL+ "product/getProduct",
    getProductDetail: SERVERURL+ "product/getProductDetail",
    addCart: SERVERURL+ "cart/addCart",
    getCart: SERVERURL+ "cart/getCart",
    deleCart: SERVERURL+ "cart/deleCart"
}
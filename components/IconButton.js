import { TouchableOpacity, Text,View } from 'react-native';




 function IconButton(props) {
    return (
       

            <TouchableOpacity
                style={{margin:2,borderRadius:25, backgroundColor: props.bgColor, paddingVertical: 2, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth:1,borderColor:props.color }}>
                <Text style={{ color: props.color ,paddingHorizontal: 4,fontSize:10}}>{props.text}</Text>
                {props.children}

            </TouchableOpacity>
       


    )
}
IconButton.defaultProps = {
    bgColor:'white',
    color:'red',
    text:'danger'
}
export default IconButton

import { View, TouchableOpacity } from 'react-native';




export default function IconButton(props) {
    return (
        <TouchableOpacity
            style={{ backgroundColor: props.bgColor, paddingVertical: 4, paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: props.color }}>{props.text}</Text>
            <props.children />

        </TouchableOpacity>


    )
}
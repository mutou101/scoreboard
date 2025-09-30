import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.');
  })

  return (
    <View className="user-view">
      <View className='at-article__h3'>
        <Text>
          用户信息: mini小程序
        </Text>
      </View>
    </View>
  )
}

import { Find, New, Polls } from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Icon, useTheme } from "native-base";
import { Platform } from "react-native";
const { Navigator, Screen } = createBottomTabNavigator()

const AppRoutes = () => {
    const { colors, sizes } = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontSize: sizes[4],
                },
                tabBarItemStyle: {
                    position: "relative",
                    alignItems: "center",
                },
                tabBarActiveTintColor: colors.yellow[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    position: 'absolute',
                    height: Platform.OS ==="android" ? 64 : 86,
                    borderTopWidth: 0,
                    backgroundColor: colors.gray[800]
                }
            }}
        >
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Icon
                        as={Feather}
                        name="plus-circle"
                        color={color}
                    />,
                    tabBarLabel: 'Novo Bolão'
                }}
                name="new"
                component={New}
            />
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Icon
                        as={FontAwesome}
                        name="soccer-ball-o"
                        color={color}
                    />,
                    tabBarLabel: 'Meus Bolões',

                }}
                name="polls"
                component={Polls}
            />

            <Screen
                options={{
                   tabBarButton:()=>null
                }}
                name="find"
                component={Find}
            />
        </Navigator>
    )
}

export default AppRoutes
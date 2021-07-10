import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Start } from '../pages/Start';
import { CreateAccount } from '../pages/CreateAccount';
import { LoginParent } from '../pages/LoginParent';
import { LoginKid } from '../pages/LoginKid';
import { ChangeAccount } from '../pages/ChangeAccount';
import { KidOptions } from '../pages/KidOptions';
import { ManageSubAccount } from '../pages/ManageSubAccount';
import { ManageTasks } from '../pages/ManageTasks';
import { KidTasks } from '../pages/KidTasks';
import { ParentOptions } from '../pages/ParentOptions';
import { ParentTasks } from '../pages/ParentTasks';
import { VisualizeTask } from '../pages/VisualizeTask';
import { CreateTask } from '../pages/CreateTask';
import { CreateReward } from '../pages/CreateReward';
import { CreateSubAccount } from '../pages/CreateSubAccount';
import { SubAccountsList } from '../pages/SubAccountsList';
import { KidProfile } from '../pages/KidProfile';
import { Shop } from '../pages/Shop';
import { ManageRewards } from '../pages/ManageRewards';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode = "none"
        screenOptions = {{
            cardStyle: {
                backgroundColor: colors.background
            }
        }}
    >
        <stackRoutes.Screen 
            name = "Start"
            component = {Start}
        />

        <stackRoutes.Screen 
            name = "CreateAccount"
            component = {CreateAccount}
        />

        <stackRoutes.Screen 
            name = "LoginParent"
            component = {LoginParent}
        />

        <stackRoutes.Screen 
            name = "LoginKid"
            component = {LoginKid}
        />

        <stackRoutes.Screen 
            name = "ChangeAccount"
            component = {ChangeAccount}
        />

        <stackRoutes.Screen 
            name = "ParentOptions"
            component = {ParentOptions}
        />

        <stackRoutes.Screen 
            name = "KidOptions"
            component = {KidOptions}
        />

        <stackRoutes.Screen 
            name = "ManageSubAccount"
            component = {ManageSubAccount}
        />

        <stackRoutes.Screen 
            name = "ManageTasks"
            component = {ManageTasks}
        />

        <stackRoutes.Screen 
            name = "KidTasks"
            component = {KidTasks}
        />

        <stackRoutes.Screen 
            name = "ParentTasks"
            component = {ParentTasks}
        />

        <stackRoutes.Screen 
            name = "VisualizeTask"
            component = {VisualizeTask}
        />

        <stackRoutes.Screen 
            name = "CreateTask"
            component = {CreateTask}
        />

        <stackRoutes.Screen 
            name = "CreateReward"
            component = {CreateReward}
        />

        <stackRoutes.Screen 
            name = "CreateSubAccount"
            component = {CreateSubAccount}
        />

        <stackRoutes.Screen 
            name = "SubAccountsList"
            component = {SubAccountsList}
        />

        <stackRoutes.Screen 
            name = "KidProfile"
            component = {KidProfile}
        />

        <stackRoutes.Screen 
            name = "Shop"
            component = {Shop}
        />

        <stackRoutes.Screen 
            name = "ManageRewards"
            component = {ManageRewards}
        />
        


    </stackRoutes.Navigator>
)

export default AppRoutes;
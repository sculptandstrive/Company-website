import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Assessments } from './pages/Assessments';
import { Nutrition } from './pages/Nutrition';
import { About } from './pages/About';
import { Trainers } from './pages/Trainers';
import { GetPlan } from './pages/GetPlan';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'programs', Component: Programs },
      { path: 'assessments', Component: Assessments },
      { path: 'nutrition', Component: Nutrition },
      { path: 'about', Component: About },
      { path: 'trainers', Component: Trainers },
      { path: 'get-plan', Component: GetPlan },
      { path: 'signin', Component: SignIn },
      { path: 'signup', Component: SignUp },
    ],
  },
]);

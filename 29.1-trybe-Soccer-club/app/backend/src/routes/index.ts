import login from './login';
import clubs from './clubs';
import matchs from './matchs';
import leaderboard from './leaderboard';

const routes = [...login, ...clubs, ...matchs, ...leaderboard];

export default routes;

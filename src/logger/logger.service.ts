import { Injectable ,ConsoleLogger, Scope} from '@nestjs/common';

@Injectable()
@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
    myLog(){
        this.log('here we go!');
    }
}

import { describeVersion } from './git';
import { gitVersionToSemver, parseGitVersion } from './git-parser';

const run = async () : Promise<void> => {
    const version = await describeVersion();
    console.log( gitVersionToSemver( parseGitVersion( version ) ) );
};

run()
    .catch( ( err ) => {
        console.error( err );
        process.exit( 1 );
    } );
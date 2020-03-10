import { parseGitVersion } from './git-parser';

const childProcess = require( 'child_process' );

export const describeVersion = () : Promise<string> => new Promise( ( resolve, reject ) => {

    const proc = childProcess.spawn( 'git', [ 'describe', '--tags', '--always', '--long', 'HEAD' ] );

    let stdout = '';
    let stderr = '';

    proc.stdout.on( 'data', ( data : Buffer ) => stdout += data.toString() );

    proc.stderr.on( 'data', ( data : Buffer ) => stderr += data.toString( 'utf8' ) );

    proc.on( 'close', ( exitCode : number ) => {
        if ( exitCode === 0 ) {
            try {
                const semver = parseGitVersion( stdout );
                resolve( semver );
            } catch ( e ) {
                reject( e );
            }
        } else {
            reject( new Error( `git exited with exit code ${exitCode}: ${stderr}` ) );
        }
    } );
} );

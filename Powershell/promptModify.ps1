Write-Host "Congratulations! Your first script executed successfully"

#start shell:RecycleBinFolder

# Set-ExecutionPolicy RemoteSigned




#function global:prompt {"Hello, World > "}
#(Get-Command prompt).definition


#function global:prompt { 'PS ' + $pwd + '> ' }

<#
# Display only the current folder instead of the full path (via Larry Weiss)
#>

$host.ui.rawui.WindowTitle = $pwd

#$ESC = [char]27

#Write-Output "$ESC[32mColoured text$ESC[0m"

<#
function global:prompt {  
    $ESC = [char]27
    "$ESC[36mPS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) $ESC[0m"  
}
#>
function global:prompt {

    #'PS ' + ($pwd -split '\\')[0] + ' ' + $(($pwd -split '\\')[-1] -join '\') + '> '

    $ESC = [char]27

    'PS ' + ($pwd -split '\\')[0] + ' ' + $ESC+'[32m' + ($pwd -split '\\')[-1] + $ESC+'[0m' + '> '

    #"$([char]27)[32mUserName)" + "$([char]27)[0m"

    

}
    
    

function promptNew {

    #Assign Windows Title Text
    $host.ui.RawUI.WindowTitle = "Current Folder: $pwd"

    #Configure current user, current folder and date outputs
    $CmdPromptCurrentFolder = Split-Path -Path $pwd -Leaf
    $CmdPromptUser = [Security.Principal.WindowsIdentity]::GetCurrent();
    $Date = Get-Date -Format 'dddd hh:mm:ss tt'

    # Test for Admin / Elevated
    $IsAdmin = (New-Object Security.Principal.WindowsPrincipal ([Security.Principal.WindowsIdentity]::GetCurrent())).IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)

    #Calculate execution time of last cmd and convert to milliseconds, seconds or minutes
    $LastCommand = Get-History -Count 1
    if ($lastCommand) { $RunTime = ($lastCommand.EndExecutionTime - $lastCommand.StartExecutionTime).TotalSeconds }

    if ($RunTime -ge 60) {
        $ts = [timespan]::fromseconds($RunTime)
        $min, $sec = ($ts.ToString("mm\:ss")).Split(":")
        $ElapsedTime = -join ($min, " min ", $sec, " sec")
    }
    else {
        $ElapsedTime = [math]::Round(($RunTime), 2)
        $ElapsedTime = -join (($ElapsedTime.ToString()), " sec")
    }

    #Decorate the CMD Prompt
    Write-Host ""
    Write-host ($(if ($IsAdmin) { 'Elevated ' } else { '' })) -BackgroundColor DarkRed -ForegroundColor White -NoNewline
    Write-Host " USER:$($CmdPromptUser.Name.split("\")[1]) " -BackgroundColor DarkBlue -ForegroundColor White -NoNewline
    If ($CmdPromptCurrentFolder -like "*:*")
    { Write-Host " $CmdPromptCurrentFolder "  -ForegroundColor White -BackgroundColor DarkGray -NoNewline }
    else { Write-Host ".\$CmdPromptCurrentFolder\ "  -ForegroundColor White -BackgroundColor DarkGray -NoNewline }

    Write-Host " $date " -ForegroundColor White
    Write-Host "[$elapsedTime] " -NoNewline -ForegroundColor Green
    return "> "
} #end prompt function


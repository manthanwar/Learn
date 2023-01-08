
#cd ./Proposals/EU-Horizon-EIC-2022-Pathfinder


rm *.aux *.log *.dvi *.ps *.pdf *.gz

file="main"

latex  $file.tex -quiet -synctex=1 
#latex $file.tex 

dvips $file.dvi

ps2pdf $file.ps -dNOSAFER

#:: start .\EU-Horizon-EIC-2022-Pathfinder.pdf

rm *.aux *.log *.dvi *.ps

#code main.pdf
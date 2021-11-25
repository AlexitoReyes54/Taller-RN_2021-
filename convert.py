s = '12:45:54PM'
def convert(s):
    equivalent = {
        '12':'12',
        '11':'23',
        '10':'22',
        '09':'21',
        '08':'20',
        '07':'19',
        '06':'18',
        '05':'17',
        '04':'16',
        '03':'15',
        '02':'14',
        '01':'13',
    }
    format = s[8] + s[9]

    if(format == 'PM'):
        parts = s.split(':')
        parts[0] = equivalent[parts[0]] 
        time = str.join(":",parts)
        return time[0:8]
    elif(format == 'AM' and s[0:2] != '12'):
        return s[0:8]
    else:
        parts = s.split(':')
        parts[0] = '00'
        time = str.join(":",parts)
        return time[0:8]
    

print(convert(s))
package logger
import (
	"fmt"
	"time"
	)

func LogF(format string, a ...interface{}) {
	fmt.Printf("%v: %v\n" + format, time.Now().Format("Jan 2 15:04:05 MST"), a)
}

func Log(a ...interface{}) {
  fmt.Printf("%v: %v\n", time.Now().Format("Jan 2 15:04:05 MST"), a)
}

func Error(a ...interface{}) {
  fmt.Printf("\n\n%v: %v\n\n\n", time.Now().Format("Jan 2 15:04:05 MST"), a)
}
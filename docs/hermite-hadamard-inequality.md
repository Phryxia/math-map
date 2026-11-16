# Hermite–Hadamard 부등식

# 개요

**Hermite–Hadamard 부등식(Hermite–Hadamard inequality)** 은 아래로 볼록한 함수의 구간 위 평균값이 가운데 점의 함숫값과 두 끝점 함숫값의 평균 사이에 있다는 부등식이다. $f(x)=x^2$ 의 구간 $\lbrack 0,2\rbrack$ 위 평균값을 적분 없이 어림하려고 하자. 가운데 점 $x=1$ 의 값은 $1$ 이고 두 끝점 값의 평균은 $(0+4)/2=2$ 이다.

이 부등식은 평균값이 $1$ 과 $2$ 사이라고 답하고, 실제 값은 $4/3$ 이다. 증명은 그래프가 끝점을 이은 선분보다 아래에 있다는 것과, 가운데 점에 대칭인 두 점의 값의 평균이 가운데 점의 값 이상이라는 것을 각각 적분하는 것이다.

# 직관

$f(x)=x^2$ 의 그래프에서 두 끝점 $(0,0)$ 과 $(2,4)$ 를 이은 선분은 $y=2x$ 이고, 구간 안에서 그래프는 이 선분 아래에 있다. 선분 아래의 넓이는 $4$ 이므로 그래프 아래의 넓이는 $4$ 이하이고, 구간 길이 $2$ 로 나눈 평균값은 $2$ 이하다.

아래쪽 어림은 가운데 점 $x=1$ 에 대칭인 두 점을 짝짓는다. $x=1-t$ 와 $x=1+t$ 의 값의 평균은 다음과 같아서 $f(1)=1$ 이상이다.

$$
\frac{(1-t)^2+(1+t)^2}{2}=1+t^2
$

모든 짝에서 평균이 $1$ 이상이므로 구간 전체의 평균값도 $1$ 이상이다.

# 정의

$f$ 가 구간 $\lbrack a,b\rbrack$ 에서 [볼록성](convexity.md)의 뜻으로 볼록한 함수이면 다음이 성립한다[^1]. 이것을 **Hermite–Hadamard 부등식** 이라 한다.

$$
f\Big(\frac{a+b}{2}\Big)\le\frac{1}{b-a}\int_a^bf(x)\thinspace dx\le\frac{f(a)+f(b)}{2}
$$

가운데 항은 $f$ 의 구간 위 평균값이다. 볼록함수는 구간 안에서 연속이고 유계이므로 [Riemann 적분](riemann-integral.md)이 존재한다. 직관 절의 $f(x)=x^2$, $\lbrack 0,2\rbrack$ 에서 세 값은 $1\le 4/3\le 2$ 다.

# 성질

## 증명

오른쪽 부등식. 볼록성에서 $0\le s\le 1$ 일 때 다음이 성립한다.

$$
f\bigl((1-s)a+sb\bigr)\le(1-s)f(a)+sf(b)
$$

$x=(1-s)a+sb$ 로 바꾸어 적분하면 다음이 나온다.

$$
\frac{1}{b-a}\int_a^bf(x)\thinspace dx=\int_0^1f\bigl((1-s)a+sb\bigr)\thinspace ds\le\int_0^1\bigl((1-s)f(a)+sf(b)\bigr)\thinspace ds=\frac{f(a)+f(b)}{2}
$$

왼쪽 부등식. $m=(a+b)/2$ 라 하면 볼록성에서 $f(m)\le\bigl(f(m-t)+f(m+t)\bigr)/2$ 다. $t$ 를 $0$ 부터 $(b-a)/2$ 까지 적분하고 $(b-a)/2$ 로 나누면 우변이 구간 위 평균값이 된다.

## 등호 조건

양쪽 중 하나라도 등호이면 $f$ 는 열린구간 $(a,b)$ 에서 일차함수다. 오른쪽 등호는 적분한 부등식이 거의 모든 $s$ 에서 등호라는 뜻이고, $f$ 가 연속이므로 $f$ 가 선분과 일치한다. 왼쪽 등호도 같은 논법으로 $f(m-t)+f(m+t)=2f(m)$ 이 모든 $t$ 에서 성립하고, 볼록함수에서 이는 일차함수일 때뿐이다.

## 로그 평균

양수 $x\ne y$ 에 대해 $L(x,y)=(y-x)/(\log y-\log x)$ 를 **로그 평균(logarithmic mean)** 이라 한다. 볼록함수 $e^t$ 에 구간 $\lbrack\log x,\log y\rbrack$ 에서 이 부등식을 쓰면 다음이 나온다.

$$
\sqrt{xy}\le L(x,y)\le\frac{x+y}{2}
$$

$x=1$, $y=4$ 에서 세 값은 $2$, $3/\log 4\approx 2.16$, $2.5$ 다. 로그 평균은 기하평균과 산술평균 사이에 있고, 이것은 두 수의 [산술-기하 평균 부등식](am-gm-inequality.md)을 더 세밀하게 나눈 것이다.

# 활용

- 수치적분의 오차 부호. [Newton–Cotes 공식](newton-cotes.md)의 사다리꼴 규칙(trapezoidal rule)은 각 칸에서 오른쪽 항을, 중점 규칙(midpoint rule)은 왼쪽 항을 쓴다. 그래서 볼록함수에서는 중점 규칙이 적분을 작게, 사다리꼴 규칙이 크게 어림하고, 참값은 두 어림 사이에 있다.
- 열전달과 유체에서 쓰는 로그 평균 온도차(log mean temperature difference)는 두 끝의 온도차의 로그 평균이다. 위의 부등식으로 그 값은 두 온도차의 기하평균과 산술평균 사이에 있다.

[^1]: J. Hadamard, "Étude sur les propriétés des fonctions entières et en particulier d'une fonction considérée par Riemann", *Journal de Mathématiques Pures et Appliquées* **58** (1893), 171–215.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [Riemann 적분](riemann-integral.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization

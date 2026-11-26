# Brent 법

# 개요

**Brent 법(Brent's method)** 은 부호가 바뀌는 구간 안에서 한 변수 방정식 $f(x)=0$ 의 해를 찾되, 빠른 보간 걸음을 쓰다가 그 걸음이 믿을 만하지 않으면 구간을 반으로 자르는 방법이다. [할선법](secant-method.md)은 해 근처에서 빠르지만 초깃값이 나쁘면 해에서 멀어지고, 이분법은 반드시 수렴하지만 걸음마다 한 자리의 약 $0.3$ 만큼만 정확해진다. Brent 법은 해를 낀 구간을 놓치지 않으면서 해 근처에서는 할선법보다 빠른 차수로 수렴한다.

# 직관

$f(x)=x^3-2x-5$ 는 $f(2)=-1$, $f(3)=16$ 이므로 [중간값 정리](intermediate-value-theorem.md)로 $\lbrack 2,3\rbrack$ 에 해가 있다. 이분법은 구간을 반씩 줄여 오차 $10^{-10}$ 에 닿기까지 서른네 번 $f$ 를 계산한다.

$f(x)=\mathrm{sign}(x-1)\lvert x-1\rvert^{1/5}$ 처럼 해에서 기울기가 무한한 함수에 할선법을 $0$ 과 $3$ 에서 시작하면 근삿값이 $1.40$, $-2.80$, $-0.23$, $9.94$, $3.86$, $-19.9$ 로 해 $1$ 에서 점점 멀어진다. 할선법은 해를 낀 구간을 들고 다니지 않으므로 이런 걸음을 막을 수단이 없다.

그래서 부호가 다른 두 끝점을 항상 들고 다니면서, 보간으로 얻은 다음 점이 구간 안에 있고 걸음이 충분히 줄고 있을 때만 받아들인다. 그렇지 않으면 이분법 걸음을 한다. $x^3-2x-5$ 에서는 이분법 걸음이 한 번도 나오지 않고 $f$ 를 여섯 번 계산해 $2.0945514815$ 의 모든 자리를 얻는다.

# 정의

## 역 이차 보간

**역 이차 보간(inverse quadratic interpolation)** 은 세 점 $(a,f(a))$, $(b,f(b))$, $(c,f(c))$ 를 지나는 이차식을 $x$ 를 $y$ 의 함수로 놓고 세운 뒤 $y=0$ 에서의 값을 다음 점으로 삼는 걸음이다. 세 함숫값이 서로 다르면 [다항식 보간](polynomial-interpolation.md)의 Lagrange 꼴로 다음이 나온다. 여기서 $f\_a=f(a)$ 처럼 줄여 쓴다.

$$
s=\frac{a\thinspace f\_bf\_c}{(f\_a-f\_b)(f\_a-f\_c)}+\frac{b\thinspace f\_af\_c}{(f\_b-f\_a)(f\_b-f\_c)}+\frac{c\thinspace f\_af\_b}{(f\_c-f\_a)(f\_c-f\_b)}
$$

$x$ 를 $y$ 의 함수로 놓으므로 영점을 구하려고 이차방정식을 풀 필요가 없다. 직관 절의 예에서 $3$, $2.0588$, $2$ 의 세 점으로 이 걸음을 하면 $2.09566$ 이 나온다.

## Brent 반복

Brent 법은 세 점 $a$, $b$, $c$ 를 들고 다닌다. $b$ 는 지금까지 $\lvert f\rvert$ 가 가장 작은 점, $a$ 는 $f(a)f(b)\lt 0$ 인 맞은편 끝점, $c$ 는 직전의 $b$ 다. 한 걸음은 다음과 같다.

1. $f(a)$, $f(b)$, $f(c)$ 가 서로 다르면 역 이차 보간으로, 아니면 $a$ 와 $b$ 의 할선으로 후보 $s$ 를 구한다.
2. $s$ 가 $(3a+b)/4$ 와 $b$ 사이에 없거나, $\lvert s-b\rvert$ 가 두 걸음 전 걸음 크기의 절반 이상이면 $s$ 를 $(a+b)/2$ 로 바꾼다.
3. $f(s)$ 를 계산하고, $a$ 와 $b$ 가운데 $f(s)$ 와 부호가 같은 쪽을 $s$ 로 바꾼다. $\lvert f(a)\rvert\lt\lvert f(b)\rvert$ 이면 $a$ 와 $b$ 를 맞바꾼다.

$\lvert b-a\rvert$ 가 허용 오차보다 작아지면 멈춘다.

```javascript
// [a, b] 에서 f(a), f(b) 의 부호가 달라야 한다
function brent(f, a, b, tol) {
  let fa = f(a), fb = f(b);
  if (Math.abs(fa) < Math.abs(fb)) { [a, b] = [b, a]; [fa, fb] = [fb, fa]; }
  let c = a, fc = fa, d = 0, bisected = true;
  while (fb !== 0 && Math.abs(b - a) > tol) {
    let s = (fa !== fc && fb !== fc)
      ? a * fb * fc / ((fa - fb) * (fa - fc)) + b * fa * fc / ((fb - fa) * (fb - fc))
        + c * fa * fb / ((fc - fa) * (fc - fb))       // 역 이차 보간
      : b - fb * (b - a) / (fb - fa);                  // 할선
    const q = (3 * a + b) / 4;
    const outside = (s - q) * (s - b) >= 0;
    const lastStep = bisected ? Math.abs(b - c) : Math.abs(c - d);
    if (outside || Math.abs(s - b) >= lastStep / 2) { s = (a + b) / 2; bisected = true; }
    else bisected = false;
    const fs = f(s);
    d = c; c = b; fc = fb;
    if (fa * fs < 0) { b = s; fb = fs; } else { a = s; fa = fs; }
    if (Math.abs(fa) < Math.abs(fb)) { [a, b] = [b, a]; [fa, fb] = [fb, fa]; }
  }
  return b;
}
```

직관 절의 $x^3-2x-5$ 에서 후보는 할선 $2.0588$, 역 이차 보간 $2.09566$, 할선 $2.0945289$, 할선 $2.094551468$, 역 이차 보간 $2.0945514815$ 순이고, 오차는 $3.6\times10^{-2}$, $1.1\times10^{-3}$, $2.3\times10^{-5}$, $1.4\times10^{-8}$, $10^{-16}$ 이하다.

# 성질

## 수렴 보장

정리. $f$ 가 $\lbrack a,b\rbrack$ 에서 연속이고 $f(a)f(b)\lt 0$ 이면 Brent 법은 해를 낀 구간을 유지하며, 허용 오차 $\delta$ 에 닿기까지 $f$ 의 계산 횟수가 $(\log\_2((b-a)/\delta))^2$ 규모를 넘지 않는다.[^1]

증명의 요지. 3단계가 부호가 다른 두 끝점을 유지하므로 중간값 정리로 해가 늘 구간 안에 있다. 2단계는 보간 걸음 크기가 두 걸음마다 절반 이하로 줄 것을 요구하므로, 보간 걸음이 연달아 받아들여지는 동안에도 걸음 크기가 기하적으로 준다. 걸음이 허용 오차보다 작아지거나 조건이 깨지면 이분법 걸음이 나오고, 이분법 걸음 사이의 보간 걸음 수는 $\log\_2((b-a)/\delta)$ 규모로 묶인다.

직관 절의 $\mathrm{sign}(x-1)\lvert x-1\rvert^{1/5}$ 에서 Brent 법은 할선 걸음 21 번과 이분법 걸음 11 번, 모두 32 번의 계산으로 $10^{-10}$ 에 닿는다. 같은 정확도에 이분법만으로는 35 번이 든다.

## 수렴 차수

$f$ 가 세 번 연속미분가능하고 해가 단순근이면, 해 근처에서 역 이차 보간 걸음만 받아들여지고 수렴 차수는 $x^3=x^2+x+1$ 의 실근 $\approx1.839$ 다. 할선법의 차수 $(1+\sqrt5)/2\approx1.618$ 이 $p^2=p+1$ 에서 나오는 것과 같은 방식으로, 역 이차 보간의 오차가 직전 세 오차의 곱에 비례해 $p^3=p^2+p+1$ 이 나온다.

## Dekker 법과의 차이

Dekker 법(Dekker's method)은 할선과 이분법만 섞고, 할선 후보가 $b$ 와 구간 중점 사이에 있으면 받아들인다. 이 조건은 걸음이 매우 작아도 만족되므로, 걸음이 $\delta$ 규모로 줄어 해에 다가가는 속도가 거의 $0$ 인 경우가 생기고 계산 횟수가 $(b-a)/\delta$ 규모까지 갈 수 있다. Brent 법의 2단계 걸음 크기 조건이 이 경우를 막는다.

# 활용

- 수치 라이브러리의 한 변수 근 찾기. 부호가 바뀌는 구간만 주면 도함수 없이 쓸 수 있어, 표준 라이브러리의 기본 근 찾기 함수가 이 방법이거나 그 변형이다.
- 역함수와 분위수. 분포함수 $F$ 의 분위수 $F^{-1}(p)$ 를 $F(x)-p=0$ 의 근으로 구한다. $F$ 가 단조이므로 부호가 바뀌는 구간을 잡기 쉽다.
- [사격법](shooting-method.md)에서 처음 기울기를 고칠 때, 부호가 다른 두 기울기를 찾은 뒤 할선법 대신 Brent 법을 쓰면 해에서 먼 걸음을 막는다.
- 한 변수 최소화. 같은 저자의 최소화 방법은 황금분할 탐색과 포물선 보간을 같은 방식으로 섞는다.[^1]

[^1]: R. P. Brent, Algorithms for Minimization without Derivatives, Prentice-Hall (1973), 4장과 5장.

# 연관 문서

## 선수지식

- [할선법](secant-method.md)
- [중간값 정리](intermediate-value-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #algorithms

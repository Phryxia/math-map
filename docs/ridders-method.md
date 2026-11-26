# Ridders 법

# 개요

**Ridders 법(Ridders' method)** 은 부호가 바뀌는 구간 안에서 한 변수 방정식 $f(x)=0$ 의 해를 찾는 방법으로, 구간의 두 끝과 가운데 세 점의 함숫값에 지수함수를 곱해 한 직선 위에 놓은 뒤 그 직선의 영점을 다음 점으로 삼는다. $f(x)=x^3-2x-5$ 의 $\lbrack 2,3\rbrack$ 안의 해를 [할선법](secant-method.md)의 가위치법으로 찾으면 끝점 $3$ 이 한 번도 바뀌지 않아 오차 $10^{-10}$ 까지 스물한 걸음이 든다. Ridders 법은 걸음마다 $f$ 를 두 번 계산하고, 열 번 계산해 오차 $4.9\times10^{-12}$ 에 닿는다.

# 직관

가위치법은 두 끝점 $(2,-1)$, $(3,16)$ 을 잇는 직선의 영점 $2.0588$ 로 간다. $f$ 의 그래프는 아래로 볼록하게 휘어 있어서 직선의 영점은 해 $2.0946$ 의 왼쪽에 떨어지고, 새 구간은 $\lbrack 2.0588,3\rbrack$ 이다. 같은 일이 되풀이되어 오른쪽 끝 $3$ 은 그대로 남고, 오차는 $3.6\times10^{-2}$, $1.3\times10^{-2}$, $4.9\times10^{-3}$ 으로 걸음마다 약 $0.37$ 배씩만 준다.

가위치법이 느린 이유는 그래프가 휘어 있다는 것이다. 그래서 $f$ 에 양의 함수 $e^{Qx}$ 를 곱해 휜 것을 편다. 곱해도 부호와 영점은 그대로다.

가운데 점 $2.5$ 에서 $f(2.5)=5.625$ 이고, $e^{0.5Q}=0.78295$ 로 잡으면 세 점 $(2,-1)$, $(2.5,\thinspace 5.625\cdot0.78295)$, $(3,\thinspace 16\cdot0.78295^2)$ 이 $(2,-1)$, $(2.5,\thinspace 4.4041)$, $(3,\thinspace 9.8082)$ 가 되어 한 직선 위에 놓인다. 이 직선의 영점 $2.09252$ 가 다음 점이고 오차는 $2.0\times10^{-3}$ 이다.

# 정의

## Ridders 걸음

$f(x_0)$ 와 $f(x_2)$ 의 부호가 다르고 $x_1=(x_0+x_2)/2$, $d=x_1-x_0$ 이라 하자. $f_i=f(x_i)$ 로 줄여 쓴다. $u=e^{Qd}$ 를 세 점 $f_0$, $f_1u$, $f_2u^2$ 이 등간격 점 위의 직선을 이루도록 고르면 다음 이차방정식이 나온다.

$$
f_0-2f_1u+f_2u^2=0
$$

$f_0f_2\lt 0$ 이므로 판별식 $f_1^2-f_0f_2$ 가 양수이고, 양의 근 $u$ 가 하나 있다. 직선의 영점을 정리하면 **Ridders 걸음** 은 다음 점이다.

$$
x_3=x_1+(x_1-x_0)\frac{\mathrm{sign}(f_0-f_2)\thinspace f_1}{\sqrt{f_1^2-f_0f_2}}
$$

직관 절의 예에서 $f_0=-1$, $f_1=5.625$, $f_2=16$ 이고 $\sqrt{f_1^2-f_0f_2}=6.9022$ 다. $f_0-f_2\lt 0$ 이므로 다음이 나온다.

$$
x_3=2.5-0.5\cdot\frac{5.625}{6.9022}=2.09252
$$

## Ridders 법

**Ridders 법** 은 Ridders 걸음을 되풀이하며 구간을 줄이는 반복이다. $f(x_3)$ 과 $f_1$ 의 부호가 다르면 $x_1$ 과 $x_3$ 사이를, 같으면 $x_3$ 과 부호가 다른 끝점 사이를 새 구간으로 삼는다.

```javascript
// [a, b] 에서 f(a), f(b) 의 부호가 다를 때 Ridders 법으로 해를 찾는다
function ridders(f, a, b, tol, maxIter) {
  let fa = f(a), fb = f(b);
  for (let it = 0; it < maxIter; it++) {
    const m = (a + b) / 2, fm = f(m);
    const s = Math.sqrt(fm * fm - fa * fb);
    const x = m + (m - a) * Math.sign(fa - fb) * fm / s;
    const fx = f(x);
    if (fx === 0) return x;
    if (Math.sign(fm) !== Math.sign(fx)) { a = m; fa = fm; b = x; fb = fx; }
    else if (Math.sign(fa) !== Math.sign(fx)) { b = x; fb = fx; }
    else { a = x; fa = fx; }
    if (a > b) { [a, b] = [b, a]; [fa, fb] = [fb, fa]; }
    if (b - a < tol) return (a + b) / 2;
  }
  return (a + b) / 2;
}
```

직관 절의 예에서 첫 걸음 뒤 $f(2.09252)\lt 0$, $f(2.5)\gt 0$ 이므로 새 구간은 $\lbrack 2.09252,\thinspace 2.5\rbrack$ 다. 이어지는 점은 $2.0945409$, $2.0945514674$, $2.0945514815$ 이고 오차는 $1.1\times10^{-5}$, $1.4\times10^{-8}$, $4.9\times10^{-12}$ 이다.

# 성질

## 구간 안의 걸음

정리. Ridders 걸음의 $x_3$ 은 언제나 $\lvert x_3-x_1\rvert\lt d$ 를 만족한다. 따라서 $x_3$ 은 열린 구간 $(x_0,x_2)$ 안에 있고, 새 구간의 길이는 옛 구간 길이의 절반 이하다.

증명의 요지. $f_0f_2\lt 0$ 이면 $f_1^2-f_0f_2\gt f_1^2$ 이므로 $\lvert f_1\rvert/\sqrt{f_1^2-f_0f_2}\lt 1$ 이다. 새 구간은 $\lbrack x_0,x_1\rbrack$ 이나 $\lbrack x_1,x_2\rbrack$ 안에 들어 있다.

이분법처럼 구간이 해를 놓치지 않고, 반복마다 길이가 절반 이하로 준다. $f$ 의 계산 두 번당 절반이므로, 가장 나쁜 경우에도 계산 횟수로 이분법의 절반 속도다.

## 지수 곱 직선에서의 정확성

정리. $f(x)=(\alpha x+\beta)e^{-cx}$ 꼴이면 Ridders 걸음 한 번이 해 $-\beta/\alpha$ 를 정확히 준다.

증명의 요지. $f_ie^{cx_i}$ 가 $x_i$ 의 일차식이므로 $u=e^{cd}$ 가 이차방정식의 양의 근이다. 그 $u$ 로 편 세 점은 $(\alpha x+\beta)$ 의 그래프 위에 있고, 직선의 영점이 $-\beta/\alpha$ 다.

일반적인 매끄러운 $f$ 는 해 근처에서 이 꼴로 잘 근사되므로 걸음이 해에 가깝다. 직관 절의 예에서 한 걸음이 낸 점의 오차를 그 걸음에 쓴 세 점의 해까지 거리의 곱으로 나눈 값은 $0.063$, $0.066$, $0.068$ 로 거의 일정하다. 오른쪽 끝점이 가운데 점으로 바뀌며 반씩 다가오므로 오차가 줄어드는 비율이 걸음마다 약 네 배씩 작아진다.

## Brent 법과의 비교

[Brent 법](brent-method.md)은 걸음마다 $f$ 를 한 번 계산하고, 역 이차 보간이 믿을 만하지 않을 때만 이분한다. Ridders 법은 걸음마다 두 번 계산하지만, 따로 판정 없이 매 걸음이 구간을 반 이상 줄인다. 직관 절의 예에서 Brent 법은 여섯 번, Ridders 법은 열 번의 계산으로 같은 자리까지 맞춘다.

# 활용

- 구간을 알고 도함수가 없는 방정식. [중간값 정리](intermediate-value-theorem.md)로 해를 낀 구간이 정해져 있고 $f$ 의 도함수를 계산할 수 없을 때, 판정 분기가 없는 짧은 코드로 이분법보다 빠른 수렴을 얻는다.[^1]
- 휜 그래프에서의 가위치법 대체. 한쪽 끝점이 고정되어 느려지는 가위치법의 경우에, 지수함수를 곱해 펴는 걸음으로 양쪽 끝이 함께 움직이게 한다.

[^1]: C. J. F. Ridders, "A new algorithm for computing a single root of a real continuous function", IEEE Transactions on Circuits and Systems 26 (1979), 979–980.

# 연관 문서

## 선수지식

- [할선법](secant-method.md)
- [중간값 정리](intermediate-value-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #algorithms

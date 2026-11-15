# 산술기하 평균

# 개요

**산술기하 평균(arithmetic-geometric mean)** 은 두 양수의 산술 평균과 기하 평균을 번갈아 취해 얻는 공통 극한이다. 수평에서 놓은 진자의 주기는 제1종 타원적분 $K(1/\sqrt2)$ 로 적히는데, 이 적분은 초등함수로 계산되지 않고 구간을 잘게 나눠 더하면 자릿수를 얻는 데 많은 항이 든다.

산술기하 평균은 이 적분을 평균 두 개의 반복으로 바꾸고, 반복마다 맞는 자릿수를 두 배로 늘린다.

# 직관

$a\_0=1$, $b\_0=1/\sqrt2\approx 0.707107$ 에서 시작해 두 수를 산술 평균과 기하 평균으로 바꾼다.

| 단계 | 산술 평균 | 기하 평균 |
| --- | --- | --- |
| 0 | 1.000000 | 0.707107 |
| 1 | 0.853553 | 0.840896 |
| 2 | 0.847225 | 0.847201 |
| 3 | 0.847213 | 0.847213 |

두 수의 차는 $0.29$, $0.013$, $0.000024$, $0.00000000008$ 로 줄고, 매번 앞 차의 제곱 정도가 된다. 세 번 만에 소수 열 자리까지 같아진다.

이 공통값 $0.847213\ldots$ 으로 $\pi$ 를 나눈 값의 절반이 $1.854075$ 이고, 이것이 수평에서 놓은 진자의 $K(1/\sqrt2)$ 다. 타원적분의 값이 평균을 세 번 취하는 것으로 나온다.

# 정의

**산술기하 평균** 은 두 양수 $a\ge b\gt 0$ 에서 다음 점화식으로 만든 두 수열의 공통 극한 $M(a,b)$ 다.

$$a_{n+1}=\frac{a_n+b_n}{2},\qquad b_{n+1}=\sqrt{a_nb_n},\qquad a_0=a,\quad b_0=b$$

산술 평균과 기하 평균의 부등식으로 $b\_n\le b\_{n+1}\le a\_{n+1}\le a\_n$ 이다. 두 수열은 유계 단조 수열이므로 [수열의 극한](limits.md)이 각각 있고, $a\_{n+1}=(a\_n+b\_n)/2$ 에 극한을 취하면 두 극한이 같다. 직관 절의 표는 $M(1,1/\sqrt2)\approx 0.847213$ 이다.

# 성질

## 이차 수렴

차는 다음을 만족한다.

$$a_{n+1}-b_{n+1}=\frac{(\sqrt{a_n}-\sqrt{b_n})^2}{2}=\frac{(a_n-b_n)^2}{2(\sqrt{a_n}+\sqrt{b_n})^2}\le\frac{(a_n-b_n)^2}{8b_0}$$

그래서 차가 $b\_0$ 에 비해 작아지면 한 단계마다 맞는 자릿수가 두 배가 된다. 이것을 **이차 수렴(quadratic convergence)** 이라 한다.

## Gauss 적분 표현

$a,b\gt 0$ 에 대해 다음이 성립한다[^1].

$$\frac{\pi}{2M(a,b)}=\int_0^{\pi/2}\frac{d\theta}{\sqrt{a^2\cos^2\theta+b^2\sin^2\theta}}$$

증명의 요지. 오른쪽을 $I(a,b)$ 라 하면 변수 바꾸기 $\sin\theta=2a\sin\phi/(a+b+(a-b)\sin^2\phi)$ 로 $I(a,b)=I\bigl((a+b)/2,\sqrt{ab}\bigr)$ 가 나온다. 반복하면 $I(a,b)=I(a\_n,b\_n)$ 이고, 극한에서 $I(M,M)=\pi/(2M)$ 이다. 이 변환을 Landen 변환(Landen transformation)이라 한다.

$a=1$, $b=k'=\sqrt{1-k^2}$ 이면 오른쪽은 $\cos^2\theta+k'^2\sin^2\theta=1-k^2\sin^2\theta$ 이므로 [Jacobi 타원함수](jacobi-elliptic-functions.md) 문서의 $K(k)$ 다.

$$K(k)=\frac{\pi}{2M(1,k')}$$

## Gauss 상수

$M(1,\sqrt2)\approx 1.198140$ 의 역수 $G\approx 0.834627$ 을 Gauss 상수(Gauss's constant)라 한다. C. F. Gauss 는 1799 년에 이 값이 렘니스케이트의 둘레를 $2\pi$ 로 나눈 값과 소수 열한 자리까지 같음을 계산으로 찾았고, 위의 적분 표현으로 두 값이 같음이 증명된다. 렘니스케이트 $r^2=\cos 2\theta$ 의 둘레의 절반 $\varpi\approx 2.622057$ 로 쓰면 $G=\varpi/\pi$ 다.

## 원주율의 계산

다음 반복은 산술기하 평균으로 $\pi$ 를 계산한다. 이것을 Gauss–Legendre 알고리즘(Gauss–Legendre algorithm), 또는 Brent–Salamin 알고리즘이라 한다[^2].

```javascript
// a, b 는 산술기하 평균의 두 수열, t 는 차의 제곱을 가중해 뺀 합
function gaussLegendrePi(steps) {
  let a = 1;
  let b = 1 / Math.sqrt(2);
  let t = 1 / 4;
  let p = 1;
  for (let n = 0; n < steps; n++) {
    const aNext = (a + b) / 2;
    b = Math.sqrt(a * b);
    t -= p * (a - aNext) ** 2;
    a = aNext;
    p *= 2;
  }
  return (a + b) ** 2 / (4 * t);
}
```

반복 한 번에 $3.140\ldots$, 두 번에 $3.14159264\ldots$, 세 번에 소수 열네 자리까지 맞고, 맞는 자릿수가 반복마다 두 배가 된다. 근거는 $K$ 와 제2종 타원적분 사이의 Legendre 관계식(Legendre's relation)이다.

# 활용

- 진자의 주기. 진폭 $\theta\_0$ 인 진자의 주기는 $2\pi\sqrt{\ell/g}/M(1,\cos(\theta\_0/2))$ 다. $k=\sin(\theta\_0/2)$ 이면 $k'=\cos(\theta\_0/2)$ 이기 때문이다.
- 초등함수의 고정밀 계산. $x$ 가 클 때 $\log x$ 는 $\pi/(2M(1,4/x))$ 에 가깝고, 이를 써서 $\log$, 그리고 Newton 반복으로 $\exp$ 와 삼각함수를 $n$ 자리 정밀도로 $O(\log n)$ 번의 곱셈과 제곱근으로 계산한다[^2].
- 원주율의 기록 계산. 1970 년대 이후 원주율을 수억 자리 이상 계산할 때 Gauss–Legendre 알고리즘과 그 변형이 쓰였다.

[^1]: J. M. Borwein, P. B. Borwein, *Pi and the AGM*, Wiley, 1987, 1장.
[^2]: R. P. Brent, "Fast multiple-precision evaluation of elementary functions", *J. ACM* **23** (1976), 242–251.

# 연관 문서

## 선수지식

- [Jacobi 타원함수](jacobi-elliptic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #computation

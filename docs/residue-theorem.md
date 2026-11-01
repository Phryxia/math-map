# 유수 정리

# 개요

**유수 정리(residue theorem)** 는 복소평면의 닫힌 경로를 따라 함수를 적분한 값을, 경로 안에서 함수가 정의되지 않는 점들의 정보만으로 계산하는 정리다. [실수](real-numbers.md) 적분 $\int_{-\infty}^{\infty}dx/(1+x^2)$ 은 역탄젠트로 $\pi$ 가 나오지만, 분모가 $1+x^4$ 이면 원시함수를 구하기가 번거롭다. 유수 정리는 실직선과 큰 반원으로 된 닫힌 경로를 잡고, 경로 안에서 분모가 $0$ 이 되는 두 점마다 [복소수](complex-numbers.md) 하나를 읽어 더하는 것으로 이 적분이 $\pi/\sqrt2$ 임을 계산한다.

# 직관

실수 적분 $\int_{-\infty}^{\infty}dx/(1+x^2)$ 은 원시함수 $\arctan x$ 로 $\pi$ 가 나온다. 원시함수를 쓰지 않고 이 값을 구하려고 $x$ 를 복소수 $z$ 로 바꾼다. 실직선의 구간 $\lbrack -R,R\rbrack$ 을 지나 반지름 $R$ 인 위쪽 반원을 따라 출발점으로 오는 닫힌 경로를 잡는다. 반원 위에서는 $\lvert 1/(1+z^2)\rvert\le 1/(R^2-1)$ 이고 반원의 길이는 $\pi R$ 이므로, $R\to\infty$ 에서 반원 부분의 적분은 $0$ 으로 간다. 그러므로 실수 적분은 닫힌 경로 적분의 극한과 같다.

경로 안에서 $1/(1+z^2)$ 이 정의되지 않는 점은 $z=i$ 하나다. $1+z^2=(z-i)(z+i)$ 이고 $1/(z+i)$ 는 $i$ 근처에서 $1/(2i)$ 에 $z-i$ 의 거듭제곱들을 더한 꼴로 펼쳐진다. 그러므로 $1/(1+z^2)$ 은 $i$ 근처에서 $\frac{1}{2i}\cdot\frac{1}{z-i}$ 에 $(z-i)^n$, $n\ge 0$ 꼴의 항들을 더한 것이다. 아래 계산대로 $(z-i)^n$ 의 닫힌 경로 적분은 $n=-1$ 일 때 $2\pi i$ 이고 나머지는 $0$ 이므로, 닫힌 경로 적분은 $2\pi i\cdot\frac{1}{2i}=\pi$ 다.

## 거듭제곱의 경로적분

중심이 $c$ 인 원 $\gamma$ 위에서 거듭제곱을 적분한다. $z = c + re^{i\theta}$ 로 두면 다음이 나온다.

$$
\oint_{\gamma}(z-c)^n\thinspace dz=\begin{cases}2\pi i&(n=-1)\cr 0&(n\neq-1)\end{cases}
$$

$n \ne -1$ 이면 피적분함수가 원시함수 $(z-c)^{n+1}/(n+1)$ 을 가지므로 닫힌 경로에서 $0$ 이다. $n = -1$ 이면 $dz=ire^{i\theta}d\theta$ 이므로 적분은 $\int_0^{2\pi}i\thinspace d\theta=2\pi i$ 다. 반지름을 바꾸거나 경로를 찌그러뜨려도 두 경로 사이의 영역에서 함수가 정칙이면 값이 변하지 않는다. 그래서 위의 계수 $1/(2i)$ 는 경로가 아니라 점 $i$ 에서 정해지고, 이 계수를 $i$ 에서의 유수라 한다.

# 정의

## Laurent 급수

$f$ 가 환형 영역 $\lbrace r\lt \lvert z-c\rvert\lt R\rbrace$ 에서 정칙이면 그 위에서 다음과 같이 유일하게 전개된다. 이 전개를 **Laurent 급수(Laurent series)** 라 한다.

$$
f(z)=\sum_{n=-\infty}^{\infty}a_n(z-c)^n,\qquad a_n=\frac{1}{2\pi i}\oint_{\gamma}\frac{f(z)}{(z-c)^{n+1}}\thinspace dz
$$

$\gamma$ 는 환 안의 임의의 닫힌 원이다. 음수 지수 부분 $\sum_{n\lt 0} a_n (z-c)^n$ 이 **주부(principal part)** 다. 주부가 없으면 [멱급수](power-series.md)인 Taylor 급수(Taylor series)다.

직관 절의 $1/(1+z^2)$ 은 $0\lt\lvert z-i\rvert\lt 2$ 에서 $\frac{1}{2i}(z-i)^{-1}+\frac{1}{4}+\cdots$ 로 전개되고, 주부는 $\frac{1}{2i}(z-i)^{-1}$ 하나다.

## 고립특이점의 분류

$f$ 가 $0\lt \lvert z-c\rvert\lt R$ 에서 정칙이면 $c$ 를 **고립특이점(isolated singularity)** 이라 한다. 주부의 모양에 따라 세 가지로 나뉜다.

| 종류 | 주부 | z 가 c 로 가는 극한 |
|---|---|---|
| 제거가능(removable) | 없음 | 유한값으로 수렴 |
| m 차 극(pole of order m) | $a_{-m} \ne 0$ 인 유한 항 | $\lvert f \rvert \to \infty$ |
| 진성(essential) | 무한히 많은 항 | 존재하지 않음 |

$\sin z / z$ 는 $0$ 에서 제거가능, $1/(z^2+1)$ 은 $\pm i$ 에서 $1$ 차 극, $e^{1/z}$ 는 $0$ 에서 진성 특이점을 가진다.

## 유수와 유수 정리

$c$ 에서 $f$ 의 **유수(residue)** 는 Laurent 계수 $a_{-1}$ 이고 $\mathrm{Res}\_{z=c}f$ 로 쓴다. 직관 절에서 $\mathrm{Res}\_{z=i}\frac{1}{1+z^2}=\frac{1}{2i}$ 이다.

닫힌 경로 $\gamma$ 와 점 $z_0\notin\gamma$ 에 대해 $n(\gamma,z_0)=\frac{1}{2\pi i}\oint_\gamma\frac{dz}{z-z_0}$ 을 **감김수(winding number)** 라 한다. 경로가 $z_0$ 를 양의 방향으로 감은 횟수이고, 양의 방향 단순 닫힌 곡선이면 내부의 점에서 $1$, 외부의 점에서 $0$ 이다.

유수 정리는 다음이다. 단순연결 영역에서 $f$ 가 유한개의 고립특이점 $z_1, \ldots, z_k$ 를 제외하고 정칙이고, 그 영역 안의 닫힌 경로 $\gamma$ 가 그 특이점들을 지나지 않으면

$$
\oint_{\gamma}f(z)\thinspace dz=2\pi i\sum_{j=1}^{k}n(\gamma,z_j)\mathrm{Res}\_{z=z_j}f
$$

이다. 직관 절의 반원 경로는 $i$ 를 한 번 감고 $-i$ 를 감지 않으므로 우변이 $2\pi i\cdot\frac{1}{2i}=\pi$ 다. 증명은 각 특이점을 작은 원으로 도려내고 주부를 항별로 적분한 뒤, 나머지 정칙 부분에 Cauchy 적분 정리(Cauchy's integral theorem)를 쓴다.

# 성질

## 유수 계산 공식

급수를 실제로 펼치지 않고 극의 차수만 알면 미분으로 계산된다.

$$
\mathrm{Res}\_{z=c}f=\lim_{z\to c}(z-c)f(z)\quad(\text{1차 극})
$$

$$
\mathrm{Res}\_{z=c}f=\frac{1}{(m-1)!}\lim_{z\to c}\frac{d^{m-1}}{dz^{m-1}}\big[(z-c)^mf(z)\big]\quad(m\text{차 극})
$$

$f = g/h$ 이고 $h(c) = 0$ , $h'(c) \ne 0$ , $g(c) \ne 0$ 이면 유수는 $g(c)/h'(c)$ 다. 진성 특이점에는 이런 공식이 없고 급수를 직접 펼친다. $e^{1/z}=\sum z^{-n}/n!$ 에서 $a_{-1} = 1$ 이다.

## 특이점의 성격에 대한 정리

- Riemann 제거가능 특이점 정리(Riemann's removable singularity theorem). $f$ 가 $c$ 근처에서 유계이면 $c$ 는 제거가능하고, 함수가 $c$ 까지 정칙으로 확장된다.
- Casorati–Weierstrass 정리(Casorati–Weierstrass theorem). $c$ 가 진성 특이점이면 구멍 뚫린 임의의 근방에서 $f$ 의 상이 복소평면에서 조밀하다. [Picard 정리](picard-theorems.md)의 큰 정리에 따르면 많아야 한 값을 빼고 모든 값을 무한히 자주 취한다.
- 유수의 총합. 확장복소평면(extended complex plane)에서 유한개의 특이점만 갖는 함수는 무한대에서의 유수까지 더하면 합이 0 이다.

## 편각원리와 Rouché 정리

편각원리(argument principle)는 다음이다. $f$ 가 경로 안에서 영점 $Z$ 개, 극 $P$ 개를 중복도까지 세어 가질 때 $f'/f$ 의 유수를 모으면 다음을 얻는다.

$$
\frac{1}{2\pi i}\oint_{\gamma}\frac{f'(z)}{f(z)}\thinspace dz=Z-P
$$

$f'/f$ 는 $m$ 차 영점에서 유수 $m$, $m$ 차 극에서 유수 $-m$ 을 갖는다. 좌변은 $f \circ \gamma$ 가 원점을 감는 횟수이므로 함숫값이 원점을 도는 횟수로 내부의 영점 개수를 센다.

경로 위에서 $\lvert g \rvert \lt\lvert f \rvert$ 이면 $f$ 와 $f + g$ 는 내부에서 같은 개수의 영점을 가진다. 이것이 **Rouché 정리(Rouché's theorem)** 다. 큰 원 위에서 다항식의 최고차항이 나머지를 압도하므로 대수학의 기본정리가 따라온다.

# 활용

## 실적분과 급수 합

실수 위의 적분을 복소 경로로 닫으면 유수 계산이 된다. 반원 경로는 유리함수와 $e^{iax}$ 의 곱에, 부채꼴 경로는 분수 거듭제곱이 든 적분에, 직사각형 경로는 쌍곡함수가 든 적분에 쓰인다. 상반평면의 1 차 극 $z=i$ 하나를 잡으면 다음이 나온다.

$$
\int_{-\infty}^{\infty}\frac{e^{iax}}{1+x^2}\thinspace dx=2\pi i\mathrm{Res}\_{z=i}\frac{e^{iaz}}{1+z^2}=\pi e^{-a}\quad(a\gt 0)
$$

급수의 합에는 모든 정수에서 유수 $1$ 인 극을 갖는 $\pi \cot(\pi z)$ 를 곱한다. $\pi\cot(\pi z)/z^2$ 를 큰 정사각형 경로에서 적분하면 값이 $0$ 으로 가므로, 정수 $n\ne 0$ 에서의 유수 $1/n^2$ 들과 $0$ 에서의 유수 $-\pi^2/3$ 의 합이 $0$ 이다. 그러므로 $\sum_{n\ge 1}1/n^2 = \pi^2/6$ 이다.

## 변환의 역공식

[Laplace 변환](laplace-transform.md)과 z-변환(z-transform)의 역변환은 유수의 합이다. 선형 시불변(linear time-invariant) 시스템의 전달함수에서 극의 위치가 시간 영역의 지수 성분을 주고 유수가 그 계수를 준다. z-변환을 단위원 위에서 표본화한 것이 [이산 Fourier 변환](fourier.md)이다.

## 영점의 위치 판정

편각원리와 Rouché 정리는 방정식을 풀지 않고 근의 개수와 위치를 센다. 제어이론의 Nyquist 판정법(Nyquist stability criterion)은 전달함수가 $-1$ 을 감는 횟수로 닫힌 루프의 불안정한 극 개수를 읽는다. 수치해석에서는 영역 안의 근을 미리 세어 반복법의 초깃값을 정한다.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [멱급수](power-series.md)

## 더 알아보기

- [Hurwitz 정리](hurwitz-theorem.md)
- [소수 정리](prime-number-theorem.md)
- [타원함수](elliptic-functions.md)
- [Picard 정리](picard-theorems.md)
- [감마 함수](gamma-function.md)
- [Laplace 변환](laplace-transform.md)

#complex_analysis #analysis #theorem

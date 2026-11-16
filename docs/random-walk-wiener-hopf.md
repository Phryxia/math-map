# 무작위 걷기의 Wiener–Hopf 분해

# 개요

**무작위 걷기의 Wiener–Hopf 분해(Wiener–Hopf factorization of a random walk)** 는 걸음 하나의 분포를 걷기가 처음으로 위로 기록을 깨는 순간과 처음으로 아래로 내려가는 순간의 분포 둘의 곱으로 쪼개는 식이다. 대기열에서 손님이 기다리는 시간은 서비스 시간에서 도착 간격을 뺀 값을 걸음으로 하는 걷기가 앞으로 도달하는 최고 높이와 분포가 같다. 이 최고 높이는 걸음 하나만 보아서는 나오지 않는다.

분해의 첫 인수는 기록을 한 번 깰 때 걸리는 시간과 올라간 높이를 담는다. 최고 높이는 기록을 깰 때마다 올라간 높이를 더한 것이므로 첫 인수만으로 그 분포가 나온다.

# 직관

매 걸음 확률 $p$ 로 $+1$, 확률 $q=1-p$ 로 $-1$ 움직이는 걷기 $S\_0=0$, $S\_n=X\_1+\cdots+X\_n$ 에서 $p\lt q$ 라 한다. 걷기는 결국 아래로 흘러가고, 그 전에 도달하는 최고 높이 $M=\sup\_nS\_n$ 의 분포를 구하려고 한다.

걷기가 처음으로 $0$ 보다 위, 곧 높이 $1$ 에 닿을 확률을 $r$ 라 한다. 첫 걸음이 $+1$ 이면 닿고, $-1$ 이면 높이 $-1$ 에서 다시 두 칸을 올라와야 한다. 두 칸 오르기는 한 칸 오르기를 두 번 독립으로 하는 것이므로 다음이 나온다.

$$
r=p+qr^2
$$

근은 $1$ 과 $p/q$ 이고 $p\lt q$ 이면 $r=p/q$ 다. 걸음이 $\pm1$ 이라 새 기록은 언제나 이전 기록보다 정확히 $1$ 높다. 높이 $1$ 에 닿은 뒤 다시 $2$ 에 닿을 확률도 $r$ 이므로 다음이 나온다.

$$
\Pr\lbrack M\ge k\rbrack=(p/q)^k
$$

$p=1/3$ 이면 $M\ge 1$ 일 확률이 $1/2$, $M\ge 3$ 일 확률이 $1/8$ 이다.

이 계산은 걷기를 기록을 깨는 순간마다 끊어 같은 꼴의 조각들로 나눈 것이다. 걸음이 $\pm1$ 이 아니면 새 기록이 이전 기록보다 얼마나 높은지가 무작위다. 그 높이와 걸린 시간의 분포를 걸음의 분포에서 구하는 식이 Wiener–Hopf 분해다.

# 정의

## 사다리 시각과 사다리 높이

독립이고 같은 분포를 따르는 걸음 $X\_1,X\_2,\dots$ 의 [무작위 걷기](random-walks.md) $S\_n$ 에서 다음을 정한다.

$$
T\_+=\min\lbrace n\ge1:S\_n\gt 0\rbrace,\qquad T\_-=\min\lbrace n\ge1:S\_n\le 0\rbrace
$$

$T\_+$ 를 **강한 오름 사다리 시각(strict ascending ladder epoch)**, $H\_+=S\_{T\_+}$ 를 **강한 오름 사다리 높이(strict ascending ladder height)** 라 한다. $T\_-$ 와 $H\_-=S\_{T\_-}$ 를 **약한 내림 사다리 시각** 과 **약한 내림 사다리 높이(weak descending ladder epoch, height)** 라 한다. 그런 $n$ 이 없으면 $T=\infty$ 로 둔다.

직관 절의 걷기에서 $H\_+=1$ 이고 $\Pr\lbrack T\_+\lt\infty\rbrack=p/q$ 이다. 첫 걸음이 $-1$ 이면 $T\_-=1$, $H\_-=-1$ 이다.

## 두 생성함수

$\lvert s\rvert\lt 1$ 과 $\lvert z\rvert=1$ 에서 다음 [생성함수](generating-functions.md)들을 정한다. 기댓값은 $T\lt\infty$ 인 경우만 더한다.

$$
\chi\_+(s,z)=E\lbrack s^{T\_+}z^{H\_+}\rbrack,\qquad \chi\_-(s,z)=E\lbrack s^{T\_-}z^{H\_-}\rbrack,\qquad \varphi(z)=E\lbrack z^{X\_1}\rbrack
$$

$\varphi$ 는 걸음 하나의 분포다. $X\_1$ 이 정수값이 아니면 $z=e^{it}$ 로 두고 $z^{X}$ 를 $e^{itX}$ 로 읽는다.

# 성질

## Wiener–Hopf 분해

다음이 성립한다[^1].

$$
1-s\varphi(z)=\bigl(1-\chi\_+(s,z)\bigr)\bigl(1-\chi\_-(s,z)\bigr)
$$

증명의 요지. 길이 $n$ 인 경로를 $\max\_{k\le n}S\_k$ 에 처음 닿는 시각에서 자른다. 앞 조각은 강한 오름 사다리 조각의 이어붙임이고, 뒤 조각은 그 뒤로 기록을 깨지 않는 경로다. 뒤 조각을 시간을 거꾸로 읽으면 약한 내림 사다리 조각들로 나뉜다. 두 조각이 독립이고 조각 수에 대해 등비급수를 더하면 다음 꼴이 나오고, 이것을 정리하면 위 식이다.

$$
\frac1{1-s\varphi(z)}=\frac1{1-\chi\_+(s,z)}\cdot\frac1{1-\chi\_-(s,z)}
$$

## 대칭 ±1 걷기에서의 확인

$p=q=1/2$ 이면 $\varphi(z)=(z+z^{-1})/2$ 다. $H\_+=1$ 이고 $T\_+$ 의 생성함수 $f(s)=E\lbrack s^{T\_+}\rbrack$ 는 직관 절의 식 $r=p+qr^2$ 에 걸음마다 $s$ 를 붙인 것을 만족한다.

$$
f=\frac s2+\frac s2f^2,\qquad f(s)=\frac{1-\sqrt{1-s^2}}{s}=\frac s2+\frac{s^3}8+\cdots
$$

그래서 $\chi\_+=zf$ 다. 약한 내림 사다리는 첫 걸음이 $-1$ 이면 시각 $1$ 에 높이 $-1$ 이고, $+1$ 이면 다시 $0$ 으로 처음 돌아오는 시각에 높이 $0$ 이다. 그래서 $\chi\_-=\frac s2z^{-1}+\frac s2f$ 다. 곱을 펼치고 $f-\frac s2f^2=\frac s2$ 를 쓰면 다음이 나와 분해가 확인된다.

$$
(1-zf)\Bigl(1-\frac s2z^{-1}-\frac s2f\Bigr)=1-\frac s2(z+z^{-1})
$$

## Spitzer–Baxter 항등식

오름 인수는 각 시각의 위치 분포만으로 적힌다[^1].

$$
1-\chi\_+(s,z)=\exp\Bigl(-\sum\_{n\ge1}\frac{s^n}nE\lbrack z^{S\_n};S\_n\gt 0\rbrack\Bigr)
$$

약한 내림 인수에도 $S_ngt 0$ 을 $S_nle 0$ 으로 바꾼 같은 꼴의 식이 있고, 거기에 $z=1$ 을 넣으면 [Sparre Andersen 정리](sparre-andersen-theorem.md)의 생성함수 항등식이 된다. $s\to1$ 로 보내면 기록을 한 번이라도 깰 확률이 나온다.

$$
\Pr\lbrack T\_+\lt\infty\rbrack=1-\exp\Bigl(-\sum\_{n\ge1}\frac1n\Pr\lbrack S\_n\gt 0\rbrack\Bigr)
$$

$\sum\_n\Pr\lbrack S\_n\gt 0\rbrack/n$ 이 발산하면 걷기는 확률 $1$ 로 기록을 깬다. 평균이 $0$ 이고 분산이 유한한 걸음에서는 [중심극한정리](central-limit-theorem.md)로 $\Pr\lbrack S\_n\gt 0\rbrack\to1/2$ 이라 발산한다.

## 최고 높이의 분포

$E\lbrack X\_1\rbrack\lt 0$ 이면 $M=\sup\_{n\ge0}S\_n$ 은 유한하다. $M$ 은 기록을 깰 때마다 올라간 높이를 기록이 멈출 때까지 더한 것이고, 기록을 더 깨지 못할 확률은 $1-\chi\_+(1,1)$ 이다. 그래서 다음이 성립한다.

$$
E\lbrack z^M\rbrack=\frac{1-\chi\_+(1,1)}{1-\chi\_+(1,z)}
$$

직관 절의 걷기에서 $\chi\_+(1,z)=(p/q)z$ 이므로 우변은 공비 $p/q$ 인 기하분포의 생성함수이고, $\Pr\lbrack M\ge k\rbrack=(p/q)^k$ 와 같다.

# 활용

- [Lindley 방정식](lindley-equation.md). 대기열에서 $n$ 번째 손님이 기다리는 시간의 극한 분포는 서비스 시간에서 도착 간격을 뺀 걸음의 최고 높이 $M$ 의 분포와 같고, 위의 식으로 계산한다. 도착 간격이 지수분포이면 내림 인수가 명시적으로 나와 [대기행렬](queues.md)의 Pollaczek–Khinchine 공식(Pollaczek–Khinchine formula)이 된다.
- [Cramér–Lundberg 모형](cramer-lundberg-model.md)의 파산 확률은 보험금에서 보험료 수입을 뺀 걸음의 최고 높이가 처음 자본을 넘을 확률이고, 사다리 높이의 분포로 적힌다.
- [아크사인 법칙](arcsine-law.md)과 [Sparre Andersen 정리](sparre-andersen-theorem.md)의 생존 확률이 $z=1$ 에서의 오름 인수로 나온다.
- [Lévy 과정](levy-processes.md)에도 같은 분해가 있고, 지수분포 시각에서 멈춘 과정의 최댓값과 최솟값의 분포로 적힌다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley, 1971, Ch. XII.

# 연관 문서

## 선수지식

- [Sparre Andersen 정리](sparre-andersen-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics

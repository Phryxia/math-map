# Hashin–Shtrikman 경계

# 개요

**Hashin–Shtrikman 경계(Hashin–Shtrikman bounds)** 는 두 재료를 정해진 비율로 섞고 섞인 모양이 모든 방향에서 같다는 것만 알 때, 섞인 재료의 유효 전도율이 들어갈 수 있는 가장 좁은 범위다. 전도율 $1$ 과 $4$ 인 재료를 반씩 섞으면 층 구조에 따라 유효 전도율이 조화평균 $8/5$ 에서 산술평균 $5/2$ 까지 달라진다. 섞인 모양이 등방이면 이 범위가 좁아진다.

평면에서 같은 비율로 섞인 등방 재료의 유효 전도율은 $13/7$ 과 $28/13$ 사이에 있다. 두 재료를 바둑판처럼 놓으면 유효 전도율은 $2$ 이고 이 범위 안에 든다.

# 직관

[균질화](homogenization.md) 문서의 Voigt–Reuss 경계는 산술평균과 조화평균이다. 층을 쌓은 재료는 층에 수직인 방향에서 조화평균, 나란한 방향에서 산술평균을 가져 두 경계를 모두 이룬다. 그 재료는 방향에 따라 전도율이 달라서 등방이 아니다.

등방 재료에서는 모든 방향의 유효 전도율이 같은 값 $\sigma^\ast$ 다. 평면에서 두 방향의 전도율이 하나는 조화평균 쪽, 하나는 산술평균 쪽으로 갈 수 없으므로 $\sigma^\ast$ 는 두 끝에서 떨어져야 한다.

바둑판 재료는 $90°$ 돌리면 두 재료가 서로 자리를 바꾼다. 평면에서 기울기장을 $90°$ 돌리면 발산이 $0$ 인 장이 되므로, 전도율 $\sigma_1,\sigma_2$ 의 문제와 $1/\sigma_1,1/\sigma_2$ 의 문제가 서로 바뀐다. 그 대칭에서 $\sigma^\ast=\sqrt{\sigma_1\sigma_2}=2$ 가 나온다.

# 정의

## 등방 2상 재료

$d$ 차원 공간의 주기 재료가 전도율 $\sigma_1$ 인 상과 $\sigma_2$ 인 상으로 이루어지고, 두 상의 부피 비율이 $\theta_1$, $\theta_2=1-\theta_1$ 이라 하자. $\sigma_1\lt\sigma_2$ 로 둔다. 균질화 계수 $A^\ast$ 가 스칼라 행렬 $\sigma^\ast I$ 이면 재료가 **등방(isotropic)** 이라 한다.

## Hashin–Shtrikman 경계

다음 두 값을 **Hashin–Shtrikman 경계** 라 한다[^1].

$$
\begin{aligned}
\sigma\_{\mathrm{HS}}^-&=\theta_1\sigma_1+\theta_2\sigma_2-\frac{\theta_1\theta_2(\sigma_2-\sigma_1)^2}{\theta_1\sigma_2+\theta_2\sigma_1+(d-1)\sigma_1}\cr
\sigma\_{\mathrm{HS}}^+&=\theta_1\sigma_1+\theta_2\sigma_2-\frac{\theta_1\theta_2(\sigma_2-\sigma_1)^2}{\theta_1\sigma_2+\theta_2\sigma_1+(d-1)\sigma_2}
\end{aligned}
$$

$d=2$, $\sigma_1=1$, $\sigma_2=4$, $\theta_1=\theta_2=1/2$ 이면 분자는 $9/4$, 분모의 앞 두 항은 $5/2$ 다. 그러므로 $\sigma\_{\mathrm{HS}}^-=5/2-9/14=13/7$ 이고 $\sigma\_{\mathrm{HS}}^+=5/2-9/26=28/13$ 이다.

# 성질

## 경계 정리

정리(Hashin–Shtrikman). 등방 2상 재료의 유효 전도율은 $\sigma\_{\mathrm{HS}}^-\le\sigma^\ast\le\sigma\_{\mathrm{HS}}^+$ 를 만족한다[^1][^2].

증명의 요지. 기준 전도율 $\sigma_0=\sigma_1$ 과의 차이를 편극장(polarization field) $\tau=(\sigma-\sigma_0)\nabla u$ 로 두면, 유효 계수는 $\tau$ 에 대한 Hashin–Shtrikman 변분 원리의 최댓값으로 적힌다. 상마다 상수인 시험 편극장을 넣으면 비국소 항이 등방성 아래 $1/(d\sigma_0)$ 배로 계산되어 아래 경계가 나온다. $\sigma_0=\sigma_2$ 로 두고 최솟값 원리를 쓰면 위 경계가 나온다.

두 경계는 Voigt–Reuss 경계 안에 있다. 직관 절의 예에서 $8/5\lt 13/7$ 이고 $28/13\lt 5/2$ 다.

## 경계의 달성

전도율 $\sigma_2$ 인 공을 전도율 $\sigma_1$ 인 껍질로 싸고, 크기가 다른 이런 공을 공간에 빈틈없이 채운 재료를 Hashin 의 피복 구 집합체(coated spheres assemblage)라 한다. 공과 껍질의 반지름 비를 부피 비율에 맞추면 유효 전도율이 정확히 $\sigma\_{\mathrm{HS}}^-$ 다[^1]. 두 상의 역할을 바꾸면 $\sigma\_{\mathrm{HS}}^+$ 다. 그러므로 등방 재료에서 이 범위는 더 좁힐 수 없다.

## Keller–Dykhne 쌍대성

정리. 평면의 등방 2상 재료에서 두 상의 전도율을 맞바꾼 재료의 유효 전도율을 $\sigma^\ast(\sigma_2,\sigma_1)$ 이라 하면 다음이 성립한다[^3].

$$
\sigma^\ast(\sigma_1,\sigma_2)\thinspace\sigma^\ast(\sigma_2,\sigma_1)=\sigma_1\sigma_2
$$

증명의 요지. $R$ 이 $90°$ 회전이면 $\nabla u$ 가 회전이 $0$ 인 장일 때 $R\nabla u$ 는 발산이 $0$ 인 장이다. 전도율 $\sigma$ 의 셀 문제에서 기울기와 흐름을 $R$ 로 돌려 맞바꾸면 전도율 $1/\sigma$ 의 셀 문제가 되므로 $\sigma^\ast(1/\sigma_1,1/\sigma_2)=1/\sigma^\ast(\sigma_1,\sigma_2)$ 다. 전도율에 상수를 곱하면 유효 전도율도 같은 상수가 곱해지므로 $\sigma_1\sigma_2$ 를 곱해 등식을 얻는다.

바둑판 재료는 두 상을 맞바꾸어도 평행이동한 같은 재료이므로 $\sigma^\ast(\sigma_1,\sigma_2)=\sigma^\ast(\sigma_2,\sigma_1)$ 이고 $\sigma^\ast=\sqrt{\sigma_1\sigma_2}$ 다.

# 활용

- 복합 재료 설계. 원하는 유효 전도율이나 유효 탄성 계수를 가진 재료를 만들 수 있는지는 그 값이 Hashin–Shtrikman 경계 안에 있는지로 먼저 판정한다. 탄성 계수에 대한 같은 꼴의 경계도 있다.
- 다공성 매질과 지구물리. 암석의 전기 전도율에서 공극을 채운 물의 비율을 추정할 때, 측정값과 Hashin–Shtrikman 경계를 비교해 미세 구조의 범위를 정한다.
- 위상 최적화. 두 재료로 구조를 설계하는 위상 최적화에서 균질화로 완화한 문제의 허용 계수 집합을 이 경계와 계수 2 의 적층 재료가 정한다[^2].
- 바둑판 재료와 무작위 재료. Keller–Dykhne 쌍대성은 평면의 무작위 재료에서 두 상이 통계적으로 대칭이면 유효 전도율이 기하평균이라는 것을 준다.

[^1]: Z. Hashin, S. Shtrikman, "A variational approach to the theory of the effective magnetic permeability of multiphase materials", Journal of Applied Physics **33** (1962), 3125–3131.

[^2]: G. W. Milton, *The Theory of Composites*, Cambridge University Press (2002), Chapter 23.

[^3]: J. B. Keller, "A theorem on the conductivity of a composite medium", Journal of Mathematical Physics **5** (1964), 548–549. A. M. Dykhne, "Conductivity of a two-dimensional two-phase system", Soviet Physics JETP **32** (1971), 63–65.

# 연관 문서

## 선수지식

- [균질화](homogenization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis

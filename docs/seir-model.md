# SEIR 모형

# 개요

**SEIR 모형(susceptible–exposed–infected–recovered model)** 은 병에 걸린 뒤 남에게 옮기기 전까지의 잠복기를 따로 둔 [SIR 모형](sir-model.md)이다. 감염자 한 명이 회복할 때까지 두 명에게 병을 옮기는 것은 같은데, 한 병은 걸리자마자 옮기고 다른 병은 평균 이틀이 지나야 옮긴다. 두 병의 유행이 얼마나 빨리 커지는지, 최종적으로 몇 명이 걸리는지가 이 모형의 물음이다.

SEIR 모형은 잠복기가 유행의 속도만 늦추고 최종 크기는 바꾸지 않는다는 것을 보이고, 관측한 증가 속도에서 감염자 한 명이 옮기는 사람 수를 거꾸로 계산하는 식을 준다.

# 직관

SIR 모형의 마을처럼 감염자는 하루에 $0.4$ 명에게 옮기고 하루에 $1/5$ 의 비율로 회복한다. 여기에 걸린 사람이 하루에 $1/2$ 의 비율로 잠복기를 끝내고 감염자가 된다는 단계를 더한다. 잠복기의 평균은 $2$ 일이고, 잠복 중인 사람은 옮기지 않으며 회복하지도 않는다.

감염자 한 명이 회복할 때까지 옮기는 사람 수는 여전히 $0.4\times 5=2$ 다. 잠복기는 감염 사슬의 한 고리마다 $2$ 일씩 늦출 뿐, 한 고리에서 몇 명이 새로 걸리는지는 바꾸지 않는다. 그래서 결국 걸리는 비율은 SIR 모형과 같은 약 80% 다.

유행의 속도는 달라진다. 잠복기가 없으면 감염자가 약 $3.5$ 일마다 두 배가 되지만, 잠복기가 있으면 아래 성질 절의 계산으로 약 $5.7$ 일마다 두 배가 된다.

# 정의

## SEIR 모형

$\beta,\sigma,\gamma\gt 0$ 일 때 합이 $1$ 인 $s,e,i,r\ge 0$ 위의 다음 방정식을 **SEIR 모형** 이라 한다[^1].

$$
\begin{aligned}
\dot s&=-\beta si, & \dot e&=\beta si-\sigma e,\cr
\dot i&=\sigma e-\gamma i, & \dot r&=\gamma i
\end{aligned}
$$

$e$ 는 걸렸지만 아직 옮기지 않는 사람의 비율이고, $1/\sigma$ 가 잠복기의 평균, $1/\gamma$ 가 감염 기간의 평균이다. 직관 절의 병은 $\beta=0.4$, $\sigma=0.5$, $\gamma=0.2$ 다.

## 기초 감염 재생산수

SEIR 모형의 **기초 감염 재생산수(basic reproduction number)** 는 SIR 모형과 같이 $R_0=\beta/\gamma$ 다. 잠복 중인 사람은 모두 감염자가 되고, 감염자는 평균 $1/\gamma$ 동안 하루에 $\beta$ 명에게 옮긴다. 직관 절에서 $R_0=2$ 다.

# 성질

## 최종 크기

정리. $s_0=1$ 이고 $e_0+i_0\to 0$ 이면, 결국 걸리는 비율 $z$ 는 SIR 모형과 같은 방정식 $1-z=e^{-R_0z}$ 의 근이다[^1].

증명의 요지. $\frac{d}{dt}\log s=-\beta i$ 를 끝까지 적분하면 $\log s_\infty=-\beta\int_0^\infty i\thinspace dt$ 다. $\dot r=\gamma i$ 이므로 그 적분은 $r_\infty/\gamma$ 이고, 끝에는 $e=i=0$ 이라 $r_\infty=1-s_\infty=z$ 다.

## 초기 증가율

정리. 유행 초기에 $e$ 와 $i$ 는 비율 $e^{\lambda t}$ 로 자라고, $\lambda$ 는 다음 방정식의 양의 근이다[^1].

$$
(\lambda+\sigma)(\lambda+\gamma)=\beta\sigma
$$

증명의 요지. $s\approx 1$ 로 두면 $(e,i)$ 의 방정식이 선형이 되고, 그 행렬의 [고윳값](eigenvalues.md)이 위 식을 만족한다. $R_0\gt 1$ 이면 $\beta\sigma\gt\sigma\gamma$ 이므로 양의 근이 하나 있다.

직관 절의 병에서 $\lambda^2+0.7\lambda-0.1=0$ 이고 $\lambda\approx 0.122$ 다. 두 배가 되는 시간은 $\log 2/\lambda\approx 5.7$ 일이고, 잠복기가 없는 SIR 모형의 $\gamma(R_0-1)=0.2$ 에서 나오는 $3.5$ 일보다 길다.

## 증가율에서 재생산수로

위 식을 $R_0$ 에 대해 풀면 다음이 나온다[^2].

$$
R_0=\Big(1+\frac{\lambda}{\sigma}\Big)\Big(1+\frac{\lambda}{\gamma}\Big)
$$

직관 절의 병에서 $(1+0.122/0.5)(1+0.122/0.2)\approx 2$ 다. 같은 증가율 $\lambda$ 를 관측해도 잠복기를 무시하고 SIR 식 $R_0=1+\lambda/\gamma$ 를 쓰면 $1.61$ 로 낮게 추정한다.

이 식은 감염과 감염 사이의 시간 간격의 분포에서 $R_0$ 를 얻는 일반식의 특수한 경우다. 그 간격의 밀도를 $w$ 라 하면 $R_0=1/\int_0^\infty e^{-\lambda t}w(t)\thinspace dt$ 이고, SEIR 모형에서 간격은 평균 $1/\sigma$ 와 $1/\gamma$ 인 두 지수분포 시간의 합이다.

# 활용

- 유행 초기의 추정. 확진자 수의 증가율과 잠복기, 감염 기간의 자료로 $R_0$ 를 계산해 필요한 접종률 $1-1/R_0$ 을 정한다.
- 잠복기가 긴 병. 잠복기가 길면 같은 $R_0$ 에서도 유행이 늦게 커지므로, 격리와 접촉 추적이 감염 사슬의 다음 고리가 시작되기 전에 이루어질 수 있다.

[^1]: Odo Diekmann, Hans Heesterbeek, Tom Britton, *Mathematical Tools for Understanding Infectious Disease Dynamics*, Princeton University Press, 2013, Ch. 1–2.
[^2]: J. Wallinga, M. Lipsitch, "How generation intervals shape the relationship between growth rates and reproductive numbers", *Proceedings of the Royal Society B* 274 (2007), 599–604.

# 연관 문서

## 선수지식

- [SIR 모형](sir-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #statistics

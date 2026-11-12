# SIR 모형

# 개요

**SIR 모형(susceptible–infected–recovered model)** 은 감염될 수 있는 사람, 감염된 사람, 회복한 사람의 비율이 접촉과 회복으로 어떻게 바뀌는지를 나타내는 미분방정식이다. 주민 $1000$ 명의 마을에 감염자 한 명이 들어왔다. 감염자 한 명은 하루에 평균 $0.4$ 명에게 병을 옮기고 평균 $5$ 일 뒤에 회복하며, 회복한 사람은 다시 걸리지 않는다. 결국 주민의 몇 퍼센트가 병에 걸리는지가 이 모형의 물음이다.

SIR 모형은 해를 따라 변하지 않는 양을 찾아, 유행이 끝났을 때 남은 비율을 방정식 하나의 근으로 구한다.

# 직관

감염될 수 있는 사람의 비율을 $s$, 감염된 사람의 비율을 $i$ 라 하자. 감염자 한 명이 하루에 만나 옮기는 사람은 $0.4$ 명인데, 그 가운데 $s$ 의 비율만 아직 걸리지 않은 사람이다. 감염자는 하루에 $1/5$ 의 비율로 회복한다. 그래서 다음 식이 나온다.

$$
\dot s=-0.4\thinspace si,\qquad \dot i=0.4\thinspace si-0.2\thinspace i
$$

처음에는 $s\approx 1$ 이므로 $\dot i\approx 0.2\thinspace i$ 이고 감염자가 약 $3.5$ 일마다 두 배가 된다. 감염자 한 명이 회복할 때까지 옮기는 사람의 수는 $0.4\times 5=2$ 다.

두 식을 나누면 $di/ds=-1+1/(2s)$ 이고, 적분하면 $i+s-\frac12\log s$ 가 해를 따라 일정하다. 처음 값은 $s=1$, $i\approx 0$ 에서 $1$ 이다. 유행이 끝나 $i=0$ 이 되었을 때의 $s$ 를 $s_\infty$ 라 하면 다음이 나온다.

$$
s_\infty-\tfrac12\log s_\infty=1
$$

이 식의 근은 $s_\infty\approx 0.203$ 이다. 주민의 약 80%, 곧 약 $800$ 명이 병에 걸린다.

# 정의

## SIR 모형

$\beta,\gamma\gt 0$ 일 때 $s,i,r\ge 0$, $s+i+r=1$ 위의 다음 방정식을 **SIR 모형** 이라 한다[^1]. $r$ 은 회복한 사람의 비율이다.

$$
\dot s=-\beta si,\qquad \dot i=\beta si-\gamma i,\qquad \dot r=\gamma i
$$

$\beta$ 는 **감염률(transmission rate)**, $\gamma$ 는 **회복률(recovery rate)** 이다. 직관 절의 마을은 $\beta=0.4$, $\gamma=0.2$ 이다. 이 [상미분방정식](ordinary-differential-equations.md)의 해는 $s$ 가 줄고 $r$ 이 느는 방향으로만 움직인다.

## 기초 감염 재생산수

$R_0=\beta/\gamma$ 를 **기초 감염 재생산수(basic reproduction number)** 라 한다. 모두가 감염될 수 있는 집단에서 감염자 한 명이 회복할 때까지 옮기는 사람 수의 평균이고, 감염 기간의 평균 $1/\gamma$ 에 하루의 감염 수 $\beta$ 를 곱한 값이다. 직관 절의 마을은 $R_0=2$ 다.

# 성질

## 보존량

정리. 해를 따라 다음 양이 일정하다[^1].

$$
s+i-\frac1{R_0}\log s
$$

증명의 요지. 시간으로 미분하면 $\dot s+\dot i-\dot s/(R_0s)=-\gamma i+\gamma i=0$ 이다.

## 문턱 정리

정리(Kermack–McKendrick 문턱 정리, threshold theorem). $R_0s_0\le 1$ 이면 $i$ 는 처음부터 줄어든다. $R_0s_0\gt 1$ 이면 $i$ 는 $s=1/R_0$ 이 될 때까지 늘었다가 그 뒤로 줄어든다[^2].

증명의 요지. $\dot i=\gamma i(R_0s-1)$ 이고 $s$ 는 줄기만 하므로 $R_0s-1$ 의 부호가 양에서 음으로 한 번만 바뀐다.

$s_0=1$, $i_0\approx 0$ 이면 최대 감염 비율은 보존량에 $s=1/R_0$ 을 넣어 다음과 같다.

$$
i_{\max}=1-\frac{1+\log R_0}{R_0}
$$

직관 절의 마을은 $i_{\max}=1-(1+\log 2)/2\approx 0.153$ 이다. 가장 많을 때 주민의 약 15% 가 동시에 앓는다.

## 최종 크기

정리. $s_0=1$ 이고 $i_0\to 0$ 이면 결국 감염되는 비율 $z=1-s_\infty$ 는 다음 방정식의 근이다[^2].

$$
1-z=e^{-R_0z}
$$

$R_0\le 1$ 이면 근은 $z=0$ 뿐이고, $R_0\gt 1$ 이면 $(0,1)$ 에 근이 하나 더 있다. $g(z)=1-e^{-R_0z}-z$ 가 오목하고 $g(0)=0$, $g'(0)=R_0-1$, $g(1)\lt 0$ 이므로 이 근은 하나뿐이다.

이 식은 보존량에서 $i=0$ 으로 두고 $s_\infty=1-z$ 를 넣은 것이다. 직관 절의 마을은 $z\approx 0.797$ 이다. $s_\infty\gt 0$ 이므로 유행은 모두가 걸리기 전에 끝난다.

## 집단 면역

$s_0\lt 1/R_0$ 이면 문턱 정리로 유행이 커지지 않는다. 그래서 주민의 $1-1/R_0$ 이상이 미리 면역이면 감염자가 들어와도 퍼지지 않는다. 이 비율을 **집단 면역 문턱(herd immunity threshold)** 이라 한다. 직관 절의 마을은 $1/2$ 이고, 실제 유행의 최종 크기 $0.797$ 은 이보다 크다.

## 초기 단계의 확률 모형

감염자가 적은 초기에는 우연이 크다. 감염자마다 평균 $1/\gamma$ 의 지수분포 시간 동안 세기 $\beta$ 로 새 감염을 만든다고 하면, 감염자 수는 출생률 $\beta n$, 사망률 $\gamma n$ 인 선형 출생사망 과정에 가깝다. 한 사람이 만드는 감염 수는 평균 $R_0$ 의 기하분포이고, [분지과정](branching-processes.md)의 소멸 확률로 유행이 저절로 끝날 확률이 나온다[^1].

$$
q=\min\Big(1,\frac1{R_0}\Big)
$$

직관 절의 마을에 감염자 한 명이 들어오면 확률 $1/2$ 로 큰 유행 없이 끝나고, 나머지 $1/2$ 의 확률로 주민 약 80% 가 걸리는 유행이 된다.

# 활용

- 예방접종의 목표. 집단 면역 문턱 $1-1/R_0$ 으로 필요한 접종률을 정한다. $R_0$ 이 $12$ 쯤인 홍역에서는 약 92% 다[^1].
- $R_0$ 의 추정. 유행 초기의 지수 증가율 $\beta-\gamma$ 와 감염 기간 $1/\gamma$ 에서 $R_0=1+(\beta-\gamma)/\gamma$ 를 얻는다.
- 회복 뒤 면역이 없는 병은 $\dot i=\beta i(1-i)-\gamma i$ 꼴의 SIS 모형(susceptible–infected–susceptible model)이 되고, $R_0\gt 1$ 이면 감염 비율이 $1-1/R_0$ 에 머문다.

[^1]: Odo Diekmann, Hans Heesterbeek, Tom Britton, *Mathematical Tools for Understanding Infectious Disease Dynamics*, Princeton University Press, 2013, Ch. 1–2.
[^2]: W. O. Kermack, A. G. McKendrick, "A contribution to the mathematical theory of epidemics", *Proceedings of the Royal Society of London A* 115 (1927), 700–721.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [분지과정](branching-processes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #statistics
